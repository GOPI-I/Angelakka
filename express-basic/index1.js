import express from 'express'
import morgan from 'morgan';

const port = 3000;

const app = express();
app.use(morgan("tiny"));
app.use("/",(req,res)=>{
    res.send("<h1>Va Mama Weight  vasi</h1>")
});

app.listen(port , ()=>{
    console.log(`${port} currrently running`);
})