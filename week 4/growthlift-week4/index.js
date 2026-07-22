const os = require("os");
const fs = require("fs");
const http = require("http");

// 1. Practice built-in modules
console.log("OS Platform:", os.platform());
fs.writeFileSync("test.txt", "Hello GrowthLift");

// 2. Simple HTTP Server
const server = http.createServer((req, res) => {
    res.end("Hello from my server!");
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});