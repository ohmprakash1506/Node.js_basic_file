var fs = require("fs"); //* --> creating file system

//*reading a file
fs.readFile("input.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data.toString());
});

//*writing a file
fs.writeFile("test.txt", "Hello world !", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Content is written in test.txt`);
  }
});

//*appeneding content to existing file
fs.appendFile("test.txt", "\n hello there again!", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Content has been appended to test.txt`);
  }
});
