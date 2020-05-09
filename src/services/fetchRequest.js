const BODY_METHODS = ['POST', 'PUT', 'PATCH'];

export const fetchRequest = (url, method = 'GET', body) => {
  return fetch(url, {
    method: method,
    body: BODY_METHODS.includes(method) ? body : null,
    header: {
      'Content-Type': BODY_METHODS.includes(method) ? 'application/json' : null
    }
  })
    .then(res => res.json());
};
