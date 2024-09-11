const fs = require("fs");

// fs.writeFile("name.txt","batman going to save gomtha city",(err)=>{
//     if (err) throw err;
//     console.log("file saved");

// });

fs.readFile("./name.txt","utf8", (err,data)=>{
    if (err) throw err;
    console.log(data);

})
