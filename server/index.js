const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const middlewares = require('./middlewares');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message:
      'welcome to Mount Readmoore where you reach the summit of becoming an avid reader 📚🐛🤓',
  });
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`getting smarter on port ${port}`);
});
