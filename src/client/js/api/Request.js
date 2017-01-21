const request = (method, endpoint, params = {}, customHeaders) => {
  const headers = Object.assign({}, { accept: 'application/json' }, customHeaders);

  let response;

  return fetch(endpoint, { method, headers, credentials: 'same-origin' })
    .then(res => {
      response = res;
      return res.json();
    })
    .then(body => {
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
