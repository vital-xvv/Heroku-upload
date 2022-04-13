const express = require('express');
const fs = require('fs');
const path = require('path');

const createPath = (page) => path.resolve(__dirname, `${page}.html`);

const server = express();


server.use(express.static('css'));
server.use(express.static("js"));
server.use(express.urlencoded({extended:false}));


const port = process.env.PORT || 3000;;
server.listen(port, 'localhost', (error) => {
    if(error) console.log(error);
    else console.log(`listening port ${port}`)});


server.get('/', (req, res) => {
    res.sendFile(createPath("index"));
});


server.use((req, res) => {
    res.statusCode = 404;
    res.send("error");
})