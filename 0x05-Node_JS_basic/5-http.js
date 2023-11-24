const fs = require('fs');
const http = require('http');
const url = require('url');

const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

function processStudentData(data) {
  const result = [];
  const lines = data.split('\n');
  const studentRows = lines.slice(1, -1);
  const totalStudents = studentRows.length;
  const studentsByField = {};

  studentRows.forEach((studentRow) => {
    const columns = studentRow.split(',');
    const field = columns[columns.length - 1];

    if (!studentsByField[field]) {
      studentsByField[field] = {};
      studentsByField[field].firstnames = [];
      studentsByField[field].count = 1;
    } else {
      studentsByField[field].count += 1;
    }
    studentsByField[field].firstnames.push(columns[0]);
  });

  result.push(`Number of students: ${totalStudents}`);

  for (const [field, info] of Object.entries(studentsByField)) {
    const firstnamesList = info.firstnames.join(', ');
    result.push(`Number of students in ${field}: ${info.count}. List: ${firstnamesList}`);
  }

  return result.join('\n');
}

function countStudents(pathname) {
  return new Promise((resolve, reject) => {
    fs.readFile(pathname, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        resolve(processStudentData(data));
      }
    });
  });
}

const server = http.createServer((request, resp) => {
  const { pathname } = url.parse(request.url, true);

  if (pathname === '/') {
    resp.write('Hello Holberton School!');
    resp.end();
  } else if (pathname === '/students') {
    const studentReport = [];
    studentReport.push('This is the list of our students');

    countStudents(DB_FILE)
      .then((data) => {
        studentReport.push(data);
        resp.write(studentReport.join('\n'));
        resp.end();
      });
  }
});

const PORT = 1245;
const app = server.listen(PORT, () => process.stdout.write(`Listening on port ${PORT}\n`));

module.exports = app;