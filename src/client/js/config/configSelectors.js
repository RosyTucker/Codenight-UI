export const getConfig = state => state.config;

export const getRoutes = (state) => {
  const apiRoot = state.config.baseApiUrl;
  const route = suffix => `${apiRoot}${suffix}`;
  return {
    login: route('/login'),
    logout: route('/logout'),
    currentUser: route('/user')
  };
};
