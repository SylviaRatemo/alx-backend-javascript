const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n');
    const nonEmptyLines = lines.filter((line) => line.trim() !== '');
    const count = nonEmptyLines.length;

    console.log(`Number of students: ${count}`);

    const header = nonEmptyLines[0].split(',');

    const columnName = 'field';
    const firstnameColumn = 'firstname';

    const columnIndex = header.indexOf(columnName);
    const firstnameIndex = header.indexOf(firstnameColumn);

    const fieldFirstNameMap = {};

    nonEmptyLines.slice(1).forEach((line) => {
      const values = line.split(',');
      const field = values[columnIndex].trim();
      const firstname = values[firstnameIndex].trim();

      if (!fieldFirstNameMap[field]) {
        fieldFirstNameMap[field] = [];
      }

      fieldFirstNameMap[field].push(firstname);
    });

    // Log the results
    Object.entries(fieldFirstNameMap).forEach(([field, firstnames]) => {
      console.log(`Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
