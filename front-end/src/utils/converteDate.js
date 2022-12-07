const convertDate = (data) => {
  const now = new Date(data);
  const str = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
  return str;
};

export default convertDate;
