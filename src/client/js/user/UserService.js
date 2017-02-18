import Request from '../common/request';
import Routes from '../common/routes';

const getCurrentUser = () => Request.get(Routes.currentUser)
  .then(response => response.body);

const logout = () => Request.get(Routes.logout);

export default {
  logout,
  getCurrentUser
};
