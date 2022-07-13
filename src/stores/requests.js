import fetch from 'isomorphic-fetch';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
  OPTIONS: '',
};

export function post(url, data,issave) {
  debugger
  if(issave)
  {
  return fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  }).then(response => response);
}
}

export function get(url) {
  debugger
  return fetch(url, {
    method: 'GET',
    headers,
  }).then(response => response.json());
}
