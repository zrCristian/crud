const fs = require('fs');

function getDataByJsonName(fileName) {
  const rawData = fs.readFileSync(fileName, 'utf-8');

  return JSON.parse(rawData);
}

function writeJsonWithNewData(fileName, newData) {
  fs.writeFileSync(fileName, newData);
}

module.exports = {
  getDataByJsonName,
  writeJsonWithNewData,
};
