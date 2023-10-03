/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(arr, city, newGrades) {
  const students = arr.filter((newArr) => newArr.location === city);
  const final = students.map((student) => {
    for (const grade of newGrades) {
      if (student.id === grade.studentId) {
        student.grade = grade.grade;
      }
    }
    // eslint-disable-next-line no-prototype-builtins
    if (!student.hasOwnProperty('grade') || (student.grade === undefined)) {
      student.grade = 'N/A';
    }
    return student;
  });
  return final;
}
