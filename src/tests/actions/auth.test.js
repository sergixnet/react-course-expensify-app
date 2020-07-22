import { login, logout } from '../../actions/auth';

test('should generate login action', () => {
  const action = {
    type: 'LOGIN',
    uid: '123456'
  };

  expect(login(action.uid)).toEqual(action);
});

test('should generate logout action', () => {
  const action = {
    type: 'LOGOUT'
  };

  expect(logout()).toEqual(action);
});
