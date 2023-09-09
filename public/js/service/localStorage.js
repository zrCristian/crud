export const getLSValueByKeyName = (keyName) => {
  try {
    return JSON.parse(localStorage.getItem(keyName));
  } catch (e) {
    localStorage.clear();
  }
};

export const setLSValue = (keyName, data) => {
  try {
    localStorage.setItem(keyName, JSON.stringify(data));
  } catch (e) {
    localStorage.clear();
  }
};
