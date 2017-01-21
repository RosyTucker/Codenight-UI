import { Sandbox, sinon, expect, PromiseHelper } from '../../TestHelpers';
import * as ActionCreators from '../../../../src/client/js/common/actionCreator';
import { ActionTypes } from '../../../../src/client/js/common/Constants';
import { UserService } from '../../../../src/client/js/api';
import Routes from '../../../../src/client/js/api/Routes';

describe('actionCreators.js', () => {
  const sandbox = new Sandbox();
  const originalWindow = global.window;

  beforeEach(() => {
    sandbox.stub(UserService);
    global.window = { location: {} };
  });

  afterEach(() => {
    sandbox.restore();
    global.window = originalWindow;
  });

  describe('fetchUser', () => {
    it('should create an action with type RECEIVE_USER', done => {
      const user = { someKey: 'somevalue' };

      UserService.getCurrentUser.resolves(user);

      const dispatch = sinon.spy();
      const promise = ActionCreators.fetchCurrentUser()(dispatch);

      PromiseHelper.success(promise, () => {
        expect(dispatch).to.have.been.calledWith({
          type: ActionTypes.RECEIVE_CURRENT_USER,
          user
        });
      }, done);
    });

    it('should create an action with type AUTH_FAILURE if call rejected', done => {
      UserService.getCurrentUser.rejects('some error');

      const dispatch = sinon.spy();
      const promise = ActionCreators.fetchCurrentUser()(dispatch);

      PromiseHelper.success(promise, () => {
        expect(dispatch).to.have.been.calledWith(
          { type: ActionTypes.LOGOUT }
        );
      }, done);
    });
  });

  describe('login', () => {
    it('should redirect to the login endpoint', () => {
      ActionCreators.login();
      expect(window.location.href).to.equal(Routes.login);
    });

    it('should return a logging in action', () => {
      const action = ActionCreators.login();
      expect(action).to.deep.equal({
        type: ActionTypes.LOGGING_IN
      });
    });
  });
});
