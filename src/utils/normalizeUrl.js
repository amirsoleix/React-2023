export function normalizeUrlString(str) {
  return str.replace(/[^0-9a-z\u0621-\u06F9]/gi, ' ').replace(/\s+/g, '-');
}
