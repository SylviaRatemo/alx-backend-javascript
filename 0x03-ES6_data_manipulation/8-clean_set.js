export default function cleanSet(set, startString) {
  let result = '';
  set.forEach((element) => {
    if (element.startsWith(startString)) {
      result += `${element.substring(startString.length)}-`;
    }
  });
  if (result.length > 0) {
    result = result.slice(0, -1);
  }
  return result;
}
