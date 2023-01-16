export function addFilterParam(query, name, value) {
  const parsedQuery = new URLSearchParams(query);
  if (!value) {
    parsedQuery.delete(name);
  } else {
    parsedQuery.set(name, value);
  }

  return parsedQuery.toString();
}

export function getFilterParam(query, name) {
  const parsedQuery = new URLSearchParams(query);

  return parsedQuery.get(name) || '';
}
