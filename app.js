var myLogModule = require("./modules/log.js");
var msg = require("./modules/log.js");
var person = require("./modules/data.js");
var person_1 = require("./modules/person.js");

myLogModule.info("Node server started");
myLogModule.warning("Node server warning");
myLogModule.error("Node server error");
msg.log("Hello world");
console.log(person.firstName + " " + person.lastName);
var person_2 = new person_1("Henry", "Samwel");
