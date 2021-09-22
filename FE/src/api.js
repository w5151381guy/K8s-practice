export function postData(data) {
  const url = "/api/post-data";

  return fetch(url, {
    body: JSON.stringify({ data }),
  }).then((response) => response.json());
}

export function getData() {
  const url = "api/get-data";

  return fetch(url).then((response) => response.json());
}
