export default function createIteratorObject(report) {
  let staff = [];
  for (const employee of Object.values(report.allEmployees)) {
    staff = [...staff, ...employee];
  }
  return staff;
}
