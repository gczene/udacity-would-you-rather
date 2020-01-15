export const LOGIN_USER = 'LOGIN_USER';

export const login = (user) => ({
  type: LOGIN_USER,
  user,
});
