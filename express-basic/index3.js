import express from 'express';
import {dirname} from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url))
const port = 3000;
var bandName = "" ;
app.use(bodyParser.urlencoded({extended:true}));

function BandNameGenrator(req,res,next) {

    console.log(req.body);
    bandName = req.body["street"] + " " + req.body["pet"];
    next();
    
}

app.use(BandNameGenrator);

app.get("/" , (req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
})


app.post("/submit" , (req,res)=>{
    res.send(`<h1>${bandName}</h1>`)
    
})



app.listen(port , ()=>{
    console.log(`${port} is currently running`)
})