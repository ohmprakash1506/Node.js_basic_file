const { log, info, error, warning } = require("./modules/logger.js");
const path = require("path");
const os = require("os");
const event = require("events");
const { EventEmitter } = require("stream");
const { emit } = require("process");

log("Node.js module demo 1");
log("Node.js module demo 2", warning);
console.log(path.sep);
console.log(path.delimiter);
let result = path.basename("/public_html/home/index.html");
console.log(result);
console.log(os.type());
console.log(os.platform());
console.log(os.uptime());
console.log(os.userInfo());

const emitter = new EventEmitter();

const connectHandler = () => {
  console.log(`connection successfull`);
  emitter.emit(`data_recived`);
};

emitter.on(`connection`, connectHandler);

emitter.on(`data_recived`, () => {
  console.log(`data_recived successfully`);
});

emitter.emit(`connection`);
console.log(`Program ended`);
