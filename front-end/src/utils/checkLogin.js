const checkLogin = (email, password) => {
  const testEmail = /\S+@\S+\.\S+/;
  const numberMin = 6;
  const result = !((testEmail.test(email) && password.length > numberMin));

  return result;
};

export default checkLogin;
