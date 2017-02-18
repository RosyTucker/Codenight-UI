const apiRoot = 'http://localhost:4000';

const route = suffix => `${apiRoot}${suffix}`;

export default {
  login: route('/login'),
  logout: route('/logout'),
  currentUser: route('/user')
};
