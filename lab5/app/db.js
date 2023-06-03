const path = require('node:path');
const fs = require('node:fs');

const fakeDbData = JSON.parse(fs.readFileSync(path.join(__dirname, './fakeDbData.json')).toString());

const getWeatherForCity = (city) => fakeDbData[city];

const getCities = () => Object.entries(fakeDbData).map(([key, {name}]) => ({key, name}));

module.exports = {getWeatherForCity, getCities};
