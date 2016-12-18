'use strict';

const http = require("http")
const url = require("url")
const path = require("path")
const fs = require("fs")


const server = http.createServer(function(request, response) {

  const uri = url.parse(request.url).pathname
  let filename = path.join(process.cwd(), uri);
  
  console.log('request for ' + uri)

  fs.exists(filename, function(exists) {
    if(!exists) {
      response.writeHead(404, {"Content-Type": "text/plain"});
      response.write("404 Not Found\n");
      response.end();
      return;
    }

    if (uri === '/'){filename += 'public/index.html'}
    
    fs.readFile(filename, function(err, file) {
      if(err) {        
        response.writeHead(500, {"Content-Type": "text/plain"});
        response.write(err + "\n");
        response.end();
        return;
      }
      response.writeHead(200);
      response.write(file);
      response.end(); 
    });
  });
}).listen(7900);

const start = ()=>{
  require('chokidar-socket-emitter')({app:server})
  server
  console.log("Static file server running");
}

start()