// function Employee(name) {
//     this.name = name;
 
//     this.say = function () {
//         log.add("I am employee " + name);
//     };
// }
 
// function EmployeeFactory() {
 
//     this.create = function(name) {
//         return new Employee(name);
//     };
// }
 
// function Vendor(name) {
//     this.name = name;
 
//     this.say = function () {
//         log.add("I am vendor " + name);
//     };
// }
 
// function VendorFactory() {
 
//     this.create = function(name) {
//         return new Vendor(name);
//     };
// }
 
// // log helper
// var log = (function () {
//     var log = "";
 
//     return {
//         add: function (msg) { log += msg + "\n"; },
//         show: function () { console.log(log); log = ""; }
//     }
// })();
 
// function run() {
//     var persons = [];
//     var employeeFactory = new EmployeeFactory();
//     var vendorFactory = new VendorFactory();
 
//     persons.push(employeeFactory.create("Joan DiSilva"));
//     persons.push(employeeFactory.create("Tim O'Neill"));
//     persons.push(vendorFactory.create("Gerald Watson"));
//     persons.push(vendorFactory.create("Nicole McNight"));
 
//     for (var i = 0, len = persons.length; i < len; i++) {
//         persons[i].say();
//     }
 
//    console.log( log.show())
// }

// run()






function bubble(arr) {
    var temp;
    for (let i = 1; i < arr.length; i++) {
       if(arr[i]>arr[i+1]){
           temp =  arr[i] 
           arr[i] = arr[i+1]
           arr[i+1] = temp
       }
       console.log(arr)
    }

}



var a = [1,2,6,3,4,5,7,8,0]

console.log(bubble(a))
