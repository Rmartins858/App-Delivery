const getRole = () => JSON.parse(localStorage.getItem('user')).role;

export default getRole;
