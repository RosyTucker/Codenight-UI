import 'whatwg-fetch';

function getCookie(name) {
  // eslint-disable-next-line no-undef
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  return parts.length === 2 ? parts.pop().split(';').shift() : '';
}

const request = (method, endpoint, params = {}, customHeaders) => {
  const headers = {
    Authorization: `bearer ${getCookie('Auth')}`,
    Accept: 'application/json',
    ...customHeaders
  };

  let response;

  // eslint-disable-next-line no-undef
  return fetch(endpoint, { method, headers })
    .then((res) => {
      response = res;
      return res.json();
    })
    .then((body) => {
      const content = ({ status: response.status, body });
      if (content.status === 200) {
        return content;
      }
      return Promise.reject(content);
    });
};

const Request = {
  get(endpoint, paramsMap, headers) {
    return request('GET', endpoint, paramsMap, headers);
  },

  post(endpoint, paramsMap, headers) {
    return request('POST', endpoint, paramsMap, headers);
  }
};

export default Request;
