import { expect } from '../TestHelpers';
import {
  RECEIVE_USER,
  GET_CURRENT_USER,
  SET_LOADING,
  getCurrentUser,
  receiveUser,
  setLoading
} from '../../src/client/js/user/userActions';

describe('userActions', () => {
  it('creates a getCurrentUserAction', () => {
    const action = getCurrentUser();

    expect(action).to.eql({
      type: GET_CURRENT_USER
    });
  });

  it('creates a receivedUser', () => {
    const user = {
      id: 1,
      name: 'some name'
    };

    const action = receiveUser(user);

    expect(action).to.eql({
      type: RECEIVE_USER,
      user
    });
  });

  it('creates a setLoading', () => {
    const actionLoading = setLoading(true);

    expect(actionLoading).to.eql({
      type: SET_LOADING,
      isLoading: true
    });

    const actionNotLoading = setLoading(false);

    expect(actionNotLoading).to.eql({
      type: SET_LOADING,
      isLoading: false
    });
  });
});

