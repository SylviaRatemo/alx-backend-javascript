/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(arr, city, gradeArr) {
  const students = arr.filter((newArr) => newArr.location === city);
  const final = students.map((x) => {
    for (const grade of gradeArr) {
      if (x.id === grade.studentId) {
        x.grade = grade.grade;
      }
    }
    if (gradeArr.grade === undefined) {
      gradeArr.grade = 'N/A';
    }
    return x;
  });
  return final;
}
