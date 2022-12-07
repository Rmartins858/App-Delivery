const getToken = () => {
  const { token } = JSON.parse(localStorage.getItem('user'));
  return token;
};

export default getToken;
