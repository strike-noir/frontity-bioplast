var frontity = require("./build/server").default
var http = require('http')
var server = http.createServer(frontity)
server.listen({
    port: 8000
})
server.on('connect', () => console.log('connect'))
server.on('error', (err) => console.log('err', err))