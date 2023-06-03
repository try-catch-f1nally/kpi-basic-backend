const {Router} = require('express');
const {indexHandler, defaultHandler, weatherHandler, errorHandler} = require('./handlers');

const router = new Router;

router.get('/', indexHandler);
router.get('/weather/:city?', weatherHandler);
router.get('*', defaultHandler);
router.use(errorHandler)

module.exports = router;
