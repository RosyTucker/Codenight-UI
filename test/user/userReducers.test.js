import { expect } from '../TestHelpers';
import * as actions from '../../src/client/js/user/userActions';
import userReducers from '../../src/client/js/user/userReducers';

describe('userReducers', () => {
  it('updated user in state when received', () => {
    const initialState = { isLoading: true, someKey: 'some value' };
    const user = {
      id: 666,
      name: 'some session'
    };

    const action = actions.receiveUser(user);

    const updatedState = userReducers.user(initialState, action);

    expect(updatedState).to.eql({
      ...user,
      someKey: 'some value',
      isLoading: true
    });
  });

  it('updates is loading in state when set loading with true', () => {
    const initialState = { id: 123, isLoading: false };
    const action = actions.setLoading(true);

    const updatedSate = userReducers.user(initialState, action);
    expect(updatedSate).to.eql({
      id: 123,
      isLoading: true
    });
  });

  it('updates is loading in state when set loading with false', () => {
    const initialState = { id: 345, isLoading: true };
    const action = actions.setLoading(false);

    const updatedSate = userReducers.user(initialState, action);
    expect(updatedSate).to.eql({
      id: 345,
      isLoading: false
    });
  });

  it('sets state to initial state when action not handled', () => {
    const initialState = { someKey: 'some value' };
    const action = { type: 'RANDOM_THING' };

    const updatedState = userReducers.user(initialState, action);

    expect(updatedState).to.equal(initialState);
  });

  it('returns empty state when no initial state', () => {
    const updatedState = userReducers.user(undefined, { type: 'SOMETHING' });

    expect(updatedState).to.eql({
      isLoading: true
    });
  });
});

