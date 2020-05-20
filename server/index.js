const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
// const { db } = require('./db');

const middlewares = require('./middlewares');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`getting smarter on port ${port}`);
});
