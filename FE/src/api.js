export function postData(data) {
  const url = 'http://localhost:3000/api/user';

  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((response) => response.json());
}

export function getData() {
  const url = 'http://localhost:3000/api/user';

  return fetch(url).then((response) => response.json());
}
