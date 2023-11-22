const http = require('http');
const fs = require('fs');

const [, , databaseFileName] = process.argv;

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    try {
      const fileLines = fs.readFileSync(databaseFileName, 'utf-8').trim().split('\n');
      const studentGroups = {};
      const dbFieldNames = fileLines[0].split(',');
      const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];

        // eslint-disable-next-line no-prototype-builtins
        if (!studentGroups.hasOwnProperty(field)) {
          studentGroups[field] = [];
        }

        // eslint-disable-next-line max-len
        const studentEntries = studentPropNames.map((propName, idx) => [propName, studentPropValues[idx]]);
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }

      let response = `Number of students: ${Object.values(studentGroups).reduce((pre, cur) => pre + cur.length, 0)}`;

      for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        response += `\nNumber of students in ${field}: ${group.length}. List: ${studentNames}`;
      }

      res.end(response);
    } catch (error) {
      console.log(error);
      res.end('Error processing students data');
    }
  }
});

app.listen(1245, () => {
  console.log('Server is running on http://localhost:1245/');
});

module.exports = app;
