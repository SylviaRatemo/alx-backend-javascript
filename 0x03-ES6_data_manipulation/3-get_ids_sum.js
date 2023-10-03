export default function getStudentIdsSum(arr) {
  return arr.reduce((sum, current) => sum + current.id, 0);
}
