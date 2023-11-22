const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n');
    const nonEmptyLines = lines.filter((line) => line.trim() !== '');

    console.log(`Number of students: ${nonEmptyLines.length}`);

    const header = nonEmptyLines[0].split(',');
    const columnName = 'field';
    const firstnameColumn = 'firstname';

    const columnIndex = header.indexOf(columnName);
    const firstnameIndex = header.indexOf(firstnameColumn);

    const fieldFirstNameMap = nonEmptyLines.slice(1).reduce((map, line) => {
      const values = line.split(',');
      const field = values[columnIndex].trim();
      const firstname = values[firstnameIndex].trim();

      if (!map[field]) {
        // eslint-disable-next-line no-param-reassign
        map[field] = [];
      }

      map[field].push(firstname);
      return map;
    }, {});

    // Log the results
    Object.entries(fieldFirstNameMap).forEach(([field, firstnames]) => {
      console.log(`Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
