// import the file system module ('fs')
const fs = require('fs');

// countStudents function: Arrow function with parameter dataPath to
// represent the path to the CSV data file
const countStudents = (dataPath) => {
  // try-catch to handle errors
  try {
    // reads the CSV file, trims leading and trailing whitespace, splits
    // content into an array of lines
    const fileLines = fs.readFileSync(dataPath, 'utf-8').trim().split('\n');
    // object to store students grouped by their 'field'
    const studentGroups = {};
    // array of field names from CSV header
    const dbFieldNames = fileLines[0].split(',');
    // array of property names for each student excluding the 'field' or last column
    const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

    // processing each csv line, extract each student details
    for (const line of fileLines.slice(1)) {
      const studentRecord = line.split(',');
      const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
      const field = studentRecord[studentRecord.length - 1];

      // check if group for current 'field' exists in studentGroups, else
      // initialize an empty array of that 'field'
      // eslint-disable-next-line no-prototype-builtins
      if (!studentGroups.hasOwnProperty(field)) {
        studentGroups[field] = [];
      }

      // map each property to corresponding value for a student
      // eslint-disable-next-line max-len
      const studentEntries = studentPropNames.map((propName, idx) => [propName, studentPropValues[idx]]);
      studentGroups[field].push(Object.fromEntries(studentEntries));
    }

    const totalStudents = Object.values(studentGroups).reduce((pre, cur) => pre + cur.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, group] of Object.entries(studentGroups)) {
      const studentNames = group.map((student) => student.firstname).join(', ');
      console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
