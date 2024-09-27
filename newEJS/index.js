import express from 'express';

const app = express();

const port = 3000;

const bowls = ["apple","banana","carrot","betroot"];

app.get("/", (req,res)=>{
    res.render("index.ejs",{fruits:bowls}
    );
});


app.listen(port , ()=>{
    console.log(`${port} is currently running`)
});