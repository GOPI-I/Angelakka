import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/" , async(req,res)=>{
    const result = await axios.get("https://v2.jokeapi.dev/joke/Any");
    res.render("index.ejs",
        {user : JSON.stringify(result.data.setup),
         secret : JSON.stringify(result.data.delivery)
        }
    );
    console.log(result.data)
});






app.listen(port,()=>{
    console.log(`${port} is currently running`);
})