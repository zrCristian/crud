const fs = require('fs');
const path = require('path');

const DATA_PATH = path.resolve(__dirname, '../data/');

function getDataByJsonName(fileName) {
  const rawData = fs.readFileSync(fileName, 'utf-8');

  return JSON.parse(rawData);
}

function writeJsonWithNewData(fileName, newData) {
  fs.writeFileSync(`${DATA_PATH}/${fileName}`, newData);
}

module.exports = {
  getDataByJsonName,
  writeJsonWithNewData,
};
