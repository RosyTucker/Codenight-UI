const root = '/api/v1';

const route = suffix => `${root}${suffix}`;

export default {
  login: route('/login'),
  logout: route('/logout'),
  currentUser: route('/currentUser')
};
