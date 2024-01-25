const express = require('express');
const app = express();

const {createServer} = require('http');

const port = 3000;
const {Server} = require('socket.io');
const cors = require('cors');
app.use(cors());


const server = createServer(app);
const io = new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        methods:["GET","POST"],
        credentials:true
      
    }
});

io.on("connection",(socket)=>{
    console.log('User connected');
    console.log("Id " + socket.id);
    
})








app.get('/', (req, res) => {
    res.send('Hello World!');
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
