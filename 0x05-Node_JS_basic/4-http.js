const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!\n');
});

app.listen(1245, () => {
  console.log('Server is running on http://localhost:1245/');
});

module.exports = app;
