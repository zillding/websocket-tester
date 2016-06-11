export default data => {
  try {
    return JSON.parse(data);
  } catch (err) {
    return data;
  }
};
