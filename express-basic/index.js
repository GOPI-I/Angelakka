import express from 'express'
const app = express();
const port = 3000;


app.get("/" , (req,res) =>{
    res.send("hello suiiii");
});

app.get("/about" , (req,res)=>{
    res.send("<p> manasila maniloyo heyt na un arugaeyu nesamaguren</p>");

});

app.get("/contact" , (req,res) =>{
    res.send("<h1> helpline no : 257468 </h1>");
});

app.post("/register" , (req,res)=>{
    res.sendStatus(201);
});

app.put("/user/mass",(req,res) =>{
    res.sendStatus(200);
});
app.delete("/user/mass" ,(req,res)=>{
    res.sendStatus(200);
});
app.patch("/user/mass",(req,res)=>{
    res.sendStatus(200);
});

app.listen(port , ()=>{
    console.log(`server is running in ${port}`);
});