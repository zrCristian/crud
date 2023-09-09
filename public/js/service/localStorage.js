export const getLSValueByKeyName = (keyName) => JSON.parse(localStorage.getItem(keyName));

export const setLSValue = (keyName, data) => {
  localStorage.setItem(keyName, JSON.stringify(data));
};
