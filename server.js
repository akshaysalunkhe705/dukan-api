const http = require('http')
const app = require('./app')
const cluster = require('cluster')
const numCPUs = require('os').cpus().length

const port = process.env.PORT || 3000;


if (cluster.isMaster)
{
    console.log(`Master ${process.pid} is running`);  
    // Fork workers.
    for (let i = 0; i < numCPUs; i++){
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`);
    });
}
else
{
    const server = http.createServer(app);
    server.listen(port);
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    console.log(`Worker ${process.pid} started`);
}