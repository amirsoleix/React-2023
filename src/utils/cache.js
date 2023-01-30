export function setCacheItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
export function getCachedItem(key) {
  try {
    return (JSON.parse(localStorage.getItem(key)));
  } catch (er) {
    return null;
  }
}
