const fs = require('fs')

// //synchronus call
// fs.writeFileSync('./test.txt',"hi, hammad")
fs.writeFile('./test.txt',"hi, hammad", (err)=>{console.log(err);})