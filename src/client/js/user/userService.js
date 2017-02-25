import Request from '../common/request';
import Routes from '../config/configSelectors';

const getCurrentUser = route => Request.get(route).then(response => response.body);

const logout = () => Request.get(Routes.logout);

export default {
  logout,
  getCurrentUser
};
