const http = require("http")

const server =http.createServer((req , res)=>{

    if(req.url=== '/'){

         res.write("Hello World");
    }
    else if(req.url === '/about'){
        res.write("This is about route")
    }
    else {
        res.write("Route not found");
    }
   
    res.end()
})


server.listen(3000, ()=>{
    console.log("server start listening on post 3000");
});

