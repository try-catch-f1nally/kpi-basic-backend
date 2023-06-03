const {getWeatherForCity} = require('./db');
const {getCities} = require('./db');

const indexHandler = (req, res) => res.render('index');
const defaultHandler = (req, res) => res.status(404).send('Page not found');
const errorHandler = (err, req, res, next) => res.status(500).send('Server error');

const weatherHandler = (req, res, next) =>
  ((req.params.city || req.query.city) ? _weatherForCityHandler : _weatherIndexHandler)(req, res, next);

const _weatherIndexHandler = (req, res, next) => {
  try {
    res.render('weather', {cities: getCities()});
  } catch (error) {
    next(error);
  }
}

const _weatherForCityHandler = (req, res, next) => {
  try {
    const city = (req.params.city || req.query.city).toLowerCase();
    const weatherDateMap = getWeatherForCity(city);
    if (!weatherDateMap) {
      res.status(400).send(`There is no weather for "${city}" city`);
    }
    res.render('weatherForCity', weatherDateMap);
  } catch (error) {
    next(error);
  }
};

module.exports = {indexHandler, defaultHandler, errorHandler, weatherHandler};
