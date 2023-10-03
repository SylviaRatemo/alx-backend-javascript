export default function updateStudentGradeByCity(arr, city, gradeArr) {
  if (gradeArr.grade === undefined) {
    gradeArr.grade = 'N/A';
  }
  const students = arr.filter((newArr) => newArr.location === city);
  const final = students.map((x) => {
    for (const grade of gradeArr) {
      if (x.id === grade.studentId) {
        x.grade = grade.grade;
      }
    }
    return x;
  });
  return final;
}
