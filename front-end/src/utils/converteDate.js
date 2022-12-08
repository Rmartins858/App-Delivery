const convertDate = (data) => {
  const options = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  };
  const now = new Date(data).toLocaleString('pt-BR', options);
  return now;
};

export default convertDate;
