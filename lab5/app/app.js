const hbs = require('hbs');
const express = require('express');
const router = require('./router');

const PORT = process.env.PORT || 3000;

hbs.registerPartials('./views/partials');
const app = express();
app.set('view engine', 'hbs');
app.use(router);
app.listen(PORT, () => console.log(`Application start listening on port ${PORT}`));
