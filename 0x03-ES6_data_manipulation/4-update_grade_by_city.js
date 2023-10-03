/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(arr, city, newGrades) {
  const students = arr.filter((newArr) => newArr.location === city);
  const final = students.map((student) => {
    for (const grade of newGrades) {
      // eslint-disable-next-line no-prototype-builtins
      if (!grade.hasOwnProperty('grade') || (grade.grade === undefined)) {
        grade.grade = 'N/A';
      }
      if (student.id === grade.studentId) {
        student.grade = grade.grade;
      }
    }
    return student;
  });
  return final;
}
