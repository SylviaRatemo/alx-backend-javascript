export default function getListStudentIds(arr) {
  const newArr = [];
  if (arr instanceof Array) {
    arr.forEach((item) => {
      newArr.push(item.id);
    });
  }
  return newArr;
}
