export const fetchRequest = (url, method = 'GET', body) => {
  return fetch(url, {
    method: method,
    body: body ? JSON.stringify(body) : null
  })
    .then(res => res.json());
};
