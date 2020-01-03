var amqp = require('amqplib/callback_api');
var MongoClient = require('mongodb').MongoClient;
var async = require("async");
var moment = require("moment");
var config = require('./config.js');
const env = config['env'];
const options = config['config'][env];
const dbName = options['dbName'];
// var winston = require("winston");
const {
    createLogger,
    format,
    transports
} = require('winston');
const {
    combine,
    timestamp,
    label,
    prettyPrint
} = format;
var db, Client = null;
//Establish MongoClient connection code starts
const logger = createLogger({
    level: 'info',
    format: combine(
        label({
            label: 'Rabbit MQ!'
        }),
        timestamp(),
        prettyPrint()
    ),
    defaultMeta: {
        service: 'Rabbit-MQ'
    },
    transports: [
        new transports.File({
            filename: './log/error.log',
            level: 'error'
        }),
        new transports.File({
            filename: './log/combined.log'
        })
    ]
});

console.log("Environment : " + env);
logger.info({
    level: 'info',
    message: "Environment : " + env
});
console.log("options['uri']", options['uri']);

MongoClient.connect(options['uri'], {
    auth: options['auth'],
    useNewUrlParser: true
}, function (err, client) {
    if (err) {
        client.close();
        logger.error({
            level: 'error',
            message: 'Error occured while database connection'
        });
        console.log('Error occured while database connection');
        return;
    } else {
        Client = client;
        db = client.db(dbName);
        console.log("Database connected with : " + dbName);
        logger.info({
            level: 'info',
            message: "Database connected with : " + dbName
        });
    }
});
//Establish MongoClient connection code ends

// if the connection is closed or fails to be established at all, we will reconnect
var amqpConn = null;

function start() {
    let amqpUrl = `amqp://${options['userName']}:${options['password']}@${options['rabbitHost']}/${options['vhost']}`
    amqp.connect(amqpUrl, function (err, conn) {
        if (err) {
            logger.error({
                level: 'error',
                message: "[AMQP]" + err.message
            });
            console.error("[AMQP]", err.message);
            return setTimeout(start, 10000);
        }
        logger.info({
            level: 'info',
            message: "[AMQP] connected"
        });
        console.log("[AMQP] connected");
        amqpConn = conn;
        whenConnected();
    });
}

function whenConnected() {
    startWorker();
}

// A worker that acks messages only if processed succesfully
function startWorker() {
    amqpConn.createChannel(function (err, ch) {
        if (closeOnErr(err)) return;
        try {
            ch.prefetch(1);
            ch.assertQueue(options['queue'], {
                durable: true
            }, function (err, _ok) {
                if (closeOnErr(err)) return;
                ch.consume(options['queue'], processMsg, {
                    noAck: true
                });
                logger.info({
                    level: 'info',
                    message: "Worker is started"
                });
                console.log("Worker is started");
            });

            function processMsg(msg) {
                work(msg, function (ok) {
                    try {
                        if (ok)
                            ch.ack(msg);
                        else
                            ch.reject(msg, true);
                    } catch (e) {
                        logger.error({
                            level: 'error',
                            message: "Error Occured"
                        });
                        console.log('Error Occured')
                        // closeOnErr(e);
                    }
                });
            }
        } catch (e) {
            logger.error({
                level: 'error',
                message: 'Error Occured ' + e
            });
            console.log('Error Occured', e);
        }
    });
}

function work(msg, cb) {
    if (msg && msg.content) {
        try {
            let data = JSON.parse(msg.content)
            data.processStatus = 'PENDING';
            data.createdOn = new Date();
            db.collection('incomingData').insert(data, (err, message) => {
                if (err) {
                    Client.close();
                    throw err;
                } else {
                    logger.info({
                        level: 'info',
                        message: 'document inserted in tpmqueus'
                    });
                    console.log('document inserted in tpmqueus');
                }
            })
        } catch (e) {
            let firstvariable = "";
            let stringData = msg.content.toString('utf8');
            let tpmJson = stringData.match(new RegExp(firstvariable + "(.*)" + secondvariable));
            let tpm = tpmJson[0].slice(0, -1)
            let tpmIdData = JSON.parse('{"' + tpm + '}');
            let errData = {
                tpmId: tpmIdData['tpmId'],
                message: 'Error occured while parsing the json',
                errorData: "Invalid Json",
                data: stringData
            }
            sendResponseToQueue(errData, tpmIdData['tpmId'], (err, data) => {
                console.log('Error occured while parsing the json');
            });
        }
    }
}

function closeOnErr(err) {
    if (!err) return false;
    logger.error({
        level: 'error',
        message: "[AMQP] error " + err
    });
    console.error("[AMQP] error", err);
    amqpConn.close();
    return true;
}

// Check mandatory fields
function checkCreateReqs(createRequests) {
    for (let i = 0; i < createRequests.length; i++) {
        createRequests[i]['errorData'] = [];
        createRequests[i]['isReassessmentError'] = false;
        createRequests[i]['isDateValidation'] = false;

        if (createRequests[i]['someData'] === undefined || createRequests[i]['someData'] === null || createRequests[i]['someData'] === "") {

            createRequests[i]['errorData'].push({
                "error": "someData",
                "reason": "someData is Mandatory"
            })
        }
    
       
    return createRequests;
}
}
// Process queue data's one by one
function processQueueDatas() {
    let PendingDatas = [];
    let createRequests = [];
    async.series({
        getPendingDatas: s_cb => {
            db.collection('incomingData').find({
                "processStatus": "PENDING"
            }).limit(1).toArray((err, docs) => {
                if (err) {
                    Client.close();
                    s_cb({
                        "code": 1,
                        "message": "Error occured while getting pending datas",
                        "err": err
                    })
                } else {
                    PendingDatas = docs;
                    s_cb();
                }
            })
        },
        updateInprocessStatus: s_cb => {
            if (PendingDatas && PendingDatas.length) {
                async.eachSeries(PendingDatas, (each_data, each_cb) => {
                    if (each_data) {
                        createRequests.push(each_data);
                        db.collection('tpmqueuedatas').update({
                            "_id": each_data._id
                        }, {
                            "$set": {
                                "processStatus": "InProcess"
                            }
                        }, (updt_err, updt_doc) => {
                            each_cb();
                        })
                    } else {
                        each_cb();
                    }
                }, p_err => {
                    s_cb();
                })
            } else {
                s_cb({
                    "code": 2,
                    "message": "No datas available in queue...."
                });
            }
        },
        checkMandatoryFields: s_cb => {
            if (createRequests && createRequests.length) {
                createRequests = checkCreateReqs(createRequests);
                async.eachSeries(createRequests, (each_data, each_cb) => {
                    if (each_data && each_data['errorData'] && each_data['errorData'].length) {
                        //each_data['requestType'] = "BatchCreateAndUpdateResponse";
                        each_data['someData'] = each_data['data']['someData'];
                        let errData = {
                            requestType: "RequestType",
                            data: each_data['data'],
                            message: 'Mandatory fields are missing.',
                            data: each_data,
                            processStatus: 'ERROR'
                        };
                       

                        db.collection('incomingData').update({
                            "_id": each_data._id
                        }, {
                            "$set": {
                                "processStatus": "ERROR"
                            }
                        }, (updt_err, updt_doc) => {
                            sendResponseToQueue(errData, each_data['tpmId'], (err, data) => {
                                if (err) {
                                    console.log('Error Occurred  While data send to queue!, Mandatory fields are missing');
                                    each_cb();
                                } else {
                                    console.log('Error data sent to proper queue!');
                                    each_cb();
                                }
                            });
                        })
                    } else {
                        let errorDatas = [],
                            
                            incomingData = each_data['incomingData']
                        //reAssessmentRequest
                        async.series({
                            checkAlreadySubmitted: scb => {
                                let query = {
                                    "$and": [{
                                        "reqId": each_data['reqData']['reqId']
                                    }, {
                                        "reqId": each_data['reqId']
                                    }, {
                                        "status": {
                                            "$ne": "REJECTED"
                                        }
                                    }]
                                };
                                db.collection('incomingQueue').findOne(query, (err, data) => {
                                    if (data) {
                                        if (data['status'] === 'NEW') {
                                            scb();
                                        } else {

                                            let error = {
                                                "error": "incomingQueue Creation or Updation",
                                                "reason": "incomingQueue is Already Submitted."
                                            }
                                            each_data['errorData'] = [];
                                            each_data['errorData'].push(error);
                                          
                                            let errData = {
                                                data: each_data
                                            };
                                            
                                            
                                            
                                        }

                                    }
                                }
                            })
                        }
                    }