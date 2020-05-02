

const fs = require("fs");


const form = ` <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nodejstask</title>
</head>
<body>
   <form action="/Message" method="POST">
       <label for="Messsage">Message:</label>
       <input type="text" name="Message" >
      <br><button name="submit" type="submit" style="margin-top: 10px;">Submit</button>
   </form> 
</body>
</html>`


    const requesthandler = (req, res)=>{
const url = req.url;
const method = req.method;
if(url==="/"){
    res.write(form);
    return res.end();

}
if(url === "/message"&& method === "POST"){

    const body =[];
req.on("data", (chunk)=>{
body.push(chunk);
});


return req.on("end",() =>{
    const parsedBody = Buffer.concat(body).toString;
 
    const message = parsedBody.split("=")[1]; 
    const formattedMessage = message.split("+").join(" ");

    fs.writeFile("message.txt", formattedMessage, (err)=>{
        res.writeHead(302,{
            Location: "/"
        });
        return res.end();
        
    });
    // console.log(formattedMessage);

   
   

});
    
}

        res.end();     
    };


    module.exports =  requesthandler;