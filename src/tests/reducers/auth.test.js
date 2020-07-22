import authReducer from '../../reducers/auth';

test('should set login with an uid', () => {
  const uid = '123456';
  const action = {
    type: 'LOGIN',
    uid
  };
  const state = authReducer({}, action);
  expect(state).toEqual({ uid });
});

test('should set logout clearing the uid', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({uid: 'somoeuid123'}, action);
  expect(state).toEqual({});
});
