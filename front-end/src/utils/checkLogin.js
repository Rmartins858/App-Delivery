export const checkRegister = (email, password, name) => {
  const testEmail = /\S+@\S+\.\S+/;
  return !((testEmail.test(email)
  && password.length >= +'6' && name.length >= +'12'));
};

export const checkLogin = (email, password) => {
  const testEmail = /\S+@\S+\.\S+/;
  return !((testEmail.test(email) && password.length >= +'6'));
};
