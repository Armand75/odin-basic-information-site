const fs = require("node:fs");
const http = require("node:http");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    let path = "./views";

    switch(req.url){
        case "/":
            path += "/index.html";
            break;
        case "/about":
            path += "/about.html";
            break;
        case "/contact-me":
            path += "/contact-me.html";
            break;
        default:
            path += "/404.html"
    }

    fs.readFile(path, (err, data) => {
        if(err) console.log(err)
        else res.end(data)
    })
    

    
})

server.listen(8080,() => {
    console.log("Listening");
})

server.on('error', (err) => {
    console.error(`Server error: ${err}`)
})