function gradingStudents(a) {
for (let i = 0; i < a.length; i++) {
    console.log("a[]",a[i])
    if(a[i]>=38){
        // console.log("firstID",a[0]%5)
        var rem = a[i]%5 
        // console.log("rem1",rem)
        if(rem != 0){
            // console.log("else",rem)
            rem =  (a[i]%5) -1
            a[i] = a[i] + rem
        } 

    }
  
    console.log(a)    
}

}


var a = [73,67,38,33]
console.log(gradingStudents(a))


var batchIds = [417929,425394,428578,428579]
var pleaseGiveAStatus = "INITIAL"
var trackBatchValueBecome = "No need to change this(Plz don't touch)"
var IsMarksheetOrCertificateGeneratedEarly = "Y" // Possibilities (YES/Yes/yes/Y/y) or (NO/No/no/N/n) - After generated any marksheet or certificate need to revert batch provide the crosspoding value y/n
function BCJAssessmentStatusUpdate(xx) {
    let respOfIsCertifiedNull = db.assessment.updateMany(
        { batchId: { $in: xx } },
        {
            $set: {
                "jobRoles.$[].jAssessmentStatus": pleaseGiveAStatus,
                "BatchAssmtMovedOn": new Date(),
                "isForBCJStatus" : "2.3"
            }
        })
    printjson(respOfIsCertifiedNull)
    printjson("Assessment : is updated")
    switch (pleaseGiveAStatus) {
        case "INITIAL":
            trackBatchValueBecome = "BATCH_ASSMT_RESULT_INITIATED"
        case "AR DRAFT", "AR DRAFTED", "AR PRESUBMIT":
            trackBatchValueBecome = "BATCH_ASSMT_RESULT_NOT_AR_SUBMITTED"
        case "AR SUBMITTED", "AA PREAPPROVED", "AA PREREJECTED":
            trackBatchValueBecome = "BATCH_ASSMT_RESULT_AR_SUBMITTED"
        case "AA APPROVED", "SSC PREAPPROVED", "SSC PREREJECTED":
            trackBatchValueBecome = "BATCH_ASSMT_RESULT_AA_APPROVED"
        case "AA REJECTED":
            trackBatchValueBecome = "BATCH_ASSMT_RESULT_AA_REJECTED"
        case "SSC ACCEPTED":
            trackBatchValueBecome = "BATCH_ASSMT_RESULT_SSC_ACCEPTED"
        case "SSC REJECTED":
            trackBatchValueBecome = "BATCH_ASSMT_RESULT_SSC_REJECTED"
        case "SSC AAREJECTED":
            trackBatchValueBecome = "BATCH_ASSMT_RESULT_SSC_AA_REJECTED"
        case "ASSESSEMENT DONE":
            trackBatchValueBecome = "BATCH_ASSMT_RESULT_ASSESSMENT_DONE"
    }
    let respOfBatch = db.batch.updateMany(
        { batchId: { $in: xx } },
        {
            "$set": {
                "candidates.$[].cAssessmentStatus": pleaseGiveAStatus,
                "bAssessmentStatus": pleaseGiveAStatus,
                "trackBatch": trackBatchValueBecome,
                "BatchMovedOn": new Date(),
                "isForBCJStatus" : "2.3"
            }
        })
    printjson(respOfBatch)
    printjson("Batch & Assessment : "+ batchIds +" is BCJ status updation done")
}

function absentCasesInAssessmentCollection(xx) {
    let respOfabsentcases = db.assessment.updateMany({
        batchId: { $in: xx },
        jobRoles: { $elemMatch: { attendanceStatus: false } }
    },
    { $set: { 
        "jobRoles.$[i].jAssessmentStatus": "ASSESSMENT DONE",            
        "jobRoles.$[i].isMarkSheetGenerated" : false,
        "jobRoles.$[i].isCertified" : false,
    }},
    {
        arrayFilters: [{"i.attendanceStatus": false}]
    })
    printjson(respOfabsentcases)
    printjson("Assessment Attendance : absent cases update done")
}

function cAssessmentStatusInBatchCollectionBasedOnAbsentCan(xx) {
    db.assessment.find({ batchId: { $in: xx } }).forEach(assmt => {
        let out = []
        assmt.jobRoles.forEach((role) => {
            if (role.attendanceStatus == false) {
                out.push(true)
            } else {
                out.push(false)
            }
        })
        if (out.every((k) => { return k })) {
            db.batch.find({ batchId: assmt.batchId }).forEach(bath => {
                bath.candidates.forEach(cand => {
                    if (cand.userName === assmt.candidateUserName) {
                        cand.cAssessmentStatus = "ASSESSMENT DONE";
                    }
                })
                db.batch.save(bath)
            })
        } else {
            // do nothing
        }
    });
    printjson("Batch : cAssessmentStatus updation based on attendanceStatus Done")
}


function moveBatchAssmtBeforeGenerateCerificateMarksheet(xx){
    let respOfBatchAssmtMove = db.assessment.updateMany(
        { batchId: { $in: xx } },
        { $set: {      
                "generatedCertificateCount": 0,
                "generatedMarkSheetCount": 0,         
                "jobRoles.$[].isMarkSheetGenerated": null,
                "jobRoles.$[].isCertified": null,
                "jobRoles.$[].markSheetDetails": null,
                "jobRoles.$[].certificateDetails": null,
            }
        })
    printjson(respOfBatchAssmtMove)
}

function moveBatchBeforeGenerateCerificateMarksheet(xx){    
    let respOfBatch = db.batch.updateMany(
        { batchId: { $in: xx } },
        { $set: {
                "candidates.$[].jobRole.$[].isMarkSheetGenerated": false,
                "candidates.$[].jobRole.$[].isCertified": false,
                "candidates.$[].jobRole.$[].markSheetDetails": false,
                "candidates.$[].jobRole.$[].certificateDetails": false,
                "bulkRequest": false,
                "bulkZipURLDetails": null,
                "BatchRevertedCMOn": new Date(),
                "isForRevertBeforeGenerate" : "1"
            }
        })
    printjson(respOfBatch)
    let respOfBatch2 = db.batch.updateMany(
        { batchId: { $in: xx } },
        { $unset: {
                "bulkZipURLDetails": null,
            }
        })
    printjson(respOfBatch2)
    printjson("Assessment : successfully moved Batch Before Generate Cerificate Marksheet")
    printjson("Batch : "+ batchIds +" is bulk request reverted")
}

function UpdateIsCertifiedInAssmt(xx){
    let cntIsCertifiedFalse = 0;
    let cntIsCertifiedNull = 0;
    db.assessment.find({
        "batchId": {"$in" : xx}, 
        "jobRoles": {"$elemMatch": 
            {"$or":[
                {"assmtCrt.result" : {"$in" : ["FAIL", "PARTIALLY PASS", null]}},
                {"isPlatformQP" : true},
            ]},
        }
    }).forEach(assmt=>{
        if (assmt && assmt['jobRoles'] && assmt['jobRoles'].length) {
            assmt['jobRoles'].forEach(jb=>{
                if (jb['isPlatformQP'] == true || jb['assmtCrt']['result'] === 'FAIL' || jb['assmtCrt']['result'] === 'PARTIALLY PASS') {
                    cntIsCertifiedFalse++;
                   jb['isCertified']  = false;
                } else if (jb['assmtCrt']['result'] === null){
                    cntIsCertifiedNull++
                    jb['isCertified']  = null;
                }
            })
            printjson("Update count isCertified false :" +cntIsCertifiedFalse)
            printjson("Update count isCertified null :" +cntIsCertifiedNull)
            db.assessment.save(assmt)
        }
    })
}
if  (pleaseGiveAStatus == "ASSESSEMENT DONE" && !IsMarksheetOrCertificateGeneratedEarly) {
    printjson("Unable to update your requested")
} else{
    BCJAssessmentStatusUpdate(batchIds)
    if (IsMarksheetOrCertificateGeneratedEarly == "YES" || IsMarksheetOrCertificateGeneratedEarly == "Yes" || IsMarksheetOrCertificateGeneratedEarly == "yes" || IsMarksheetOrCertificateGeneratedEarly == "Y" || IsMarksheetOrCertificateGeneratedEarly == "y"){
        moveBatchAssmtBeforeGenerateCerificateMarksheet(batchIds)
        moveBatchBeforeGenerateCerificateMarksheet(batchIds)
    }
    UpdateIsCertifiedInAssmt(batchIds)
    absentCasesInAssessmentCollection(batchIds)
    cAssessmentStatusInBatchCollectionBasedOnAbsentCan(batchIds)
    printjson(`*************** Script executed successfully ***************`)
}