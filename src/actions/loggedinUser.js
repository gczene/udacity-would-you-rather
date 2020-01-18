export const LOGIN_USER = 'LOGIN_USER';
export const LOG_OUT = 'LOG_OUT';

export const logout = () => ({
  type: LOG_OUT,
});

export const login = (user) => ({
  type: LOGIN_USER,
  user,
});
