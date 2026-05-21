const http = require('http');

const server = http.createServer((req, res) => {
  res.write('GitHub Actions Deployment by anil');
  res.end();
});

server.listen(3000);

console.log("Running on port 3000");









