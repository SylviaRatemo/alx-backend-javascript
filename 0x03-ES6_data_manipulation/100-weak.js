export const weakMap = new WeakMap();
export function queryAPI(request) {
  if (!weakMap.has(request)) {
    weakMap.set(request, 0);
  }
  weakMap.set(request, weakMap.get(request) + 1);
  if (weakMap.get(request) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
