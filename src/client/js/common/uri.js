const withParams = (url, paramsObject = {}) => {
  const keyValuePairs = Object
    .keys(paramsObject)
    .map(key => `${key}=${encodeURIComponent(paramsObject[key])}`);

  if (keyValuePairs.length === 0) {
    return url;
  }
  const params = keyValuePairs.join('&');
  return `${url}?${params}`;
};

export default {
  withParams
};
