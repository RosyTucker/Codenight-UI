import Uri from './uri';
import { fetch } from './fetch';

const httpVerb = {
  POST: 'POST',
  PUT: 'PUT',
  GET: 'GET',
  DELETE: 'DELETE'
};

const status = {
  BAD_REQUEST: 400,
  OK: 200
};

function getCookie(name) {
  // eslint-disable-next-line no-undef
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  return parts.length === 2 ? parts.pop().split(';').shift() : '';
}

const doFetch = (url, method, customHeaders = {}, body) => {
  const headers = {
    Authorization: `bearer ${getCookie('Auth')}`,
    Accept: 'application/json',
    ...customHeaders
  };
  return fetch(url, { method, headers, body });
};

const isErrorStatus = response => response.status >= status.BAD_REQUEST;

const extractStatusAndBody = resp => resp
  .json()
  .then(body => ({ status: resp.status, body }));

const resultForStatus = (result) => {
  if (isErrorStatus(result)) {
    return Promise.reject(result);
  }
  return result;
};

const resultWithNoBody = (response) => {
  if (isErrorStatus(response)) {
    return extractStatusAndBody(response).then(resultForStatus);
  }
  const result = {
    status: response.status
  };
  if (response.headers && response.headers.get('Location')) {
    result.location = response.headers.get('Location');
  }
  return result;
};

const requestWithBody = (verb, url, body, params = {}, headers = {}) =>
  doFetch(Uri.withParams(url, params), verb, headers, body)
    .then(resultWithNoBody);

const getRequest = (url, params) =>
  doFetch(Uri.withParams(url, params), httpVerb.GET)
    .then(extractStatusAndBody)
    .then(resultForStatus);

const deleteRequest = (url, params) =>
  doFetch(Uri.withParams(url, params), httpVerb.DELETE)
    .then(resultWithNoBody);

const requestWithJson = verb => (url, body, params) => requestWithBody(
  verb, url, JSON.stringify(body), params, { 'Content-Type': 'application/json' }
);

const Request = {
  get: getRequest,
  put: requestWithJson(httpVerb.PUT),
  post: requestWithJson(httpVerb.POST),
  delete: deleteRequest
};

export default Request;
