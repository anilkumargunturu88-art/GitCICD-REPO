const http = require('http');

const server = http.createServer((req, res) => {
  res.write('GitHub Actions CI/CD Success by Anil Kumar');
  res.end();
});

server.listen(3000);

console.log("Application running on port 3000");
