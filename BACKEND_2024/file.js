const fs = require('fs')

// //synchronus call
 fs.writeFileSync('./test.txt',"hi, hammad")

//Asyschronus call
fs.writeFile('./test.txt',"hi, hammad bai", (err)=>{console.log(err);})


//reading a file
fs.readFile('./contacts.txt',"utf-8",(err,data)=>{
if(err){
    console.log(err);
}else{
    console.log(data);
}
})



// synch reading can return the data in a varibale nut async cant

// append data in a file

fs.appendFileSync('./contacts.txt',`\n ${Date.now()} hi`
   )


//copy 1 file to other 
fs.cpSync('./contacts.txt','./test.txt')


//delete file
fs.unlinkSync('./test.txt')


console.log(fs.statSync('./contacts.txt').isFile());