const http = require('http');
const countStudents = require('./3-read_file_async');

const [, , databaseFileName] = process.argv;

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the list of our students');
    countStudents(databaseFileName)
      .then(() => {
        console.log('Done!');
      })
      .catch((error) => {
        console.log(error);
      });
  }
});

app.listen(1245, () => {
  console.log('Server is running on http://localhost:1245/');
});

module.exports = app;
