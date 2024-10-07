import express from 'express';
import bodyparser from 'body-parser'

const app = express();
const port = 3000;

app.use(bodyparser.urlencoded({extended : true}));


app.get("/random",(req,res)=>{
    const randomIndex = Math.floor(Math.random() * loveQuotes.length);
    res.json(loveQuotes[randomIndex])
})

app.listen(port,()=>{
    console.log(`${port} is curently running`)
})


const loveQuotes = [
    {
        id : 1,
        quotes : "nee irukirai megamaga na irukiren sogamaga.",
        type : "failure" 
    },
    {
        id : 2,
        quotes : "u have map bcz everytime i see into your eye i lost",
        type : "impress"
    },
]