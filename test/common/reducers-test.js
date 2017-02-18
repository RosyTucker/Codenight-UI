import { expect } from '../TestHelpers';
import { ActionTypes } from '../../src/client/js/common/Constants';
import reducers from '../../src/client/js/common/reducers';

describe('reducers.js', () => {
  it('should set currentUser to an empty object by default', () => {
    const action = { type: 'NOT_RECEIVE_USER' };

    const updatedState = reducers(undefined, action);

    expect(updatedState).to.deep.equal({ currentUser: {} });
  });

  it('should update the currentUser in the state when action type is receive user', () => {
    const user = { someUser: 'some value' };
    const action = { type: ActionTypes.RECEIVE_CURRENT_USER, user };
    const existingState = { currentUser: { user: { someOtherKey: 'some existing value' } } };

    const updatedState = reducers(existingState, action);

    expect(updatedState).to.deep.equal({
      currentUser: {
        user: { someUser: 'some value' },
        isLoggedIn: true,
        isFetchingUser: false
      }
    });
  });

  it('should update userData to be fetching user in when action type is fetching user', () => {
    const existingState = { currentUser: { user: { someUser: 'some value' } } };
    const action = { type: ActionTypes.IS_FETCHING_CURRENT_USER };

    const updatedState = reducers(existingState, action);

    expect(updatedState).to.deep.equal({
      currentUser: {
        user: { someUser: 'some value' },
        isFetchingUser: true
      }
    });
  });

  it('should clear the userData on logout', () => {
    const action = { type: ActionTypes.LOGOUT };
    const existingState = { currentUser: { someKey: 'some value' } };

    const updatedState = reducers(existingState, action);

    expect(updatedState).to.deep.equal({ currentUser: {} });
  });
});
