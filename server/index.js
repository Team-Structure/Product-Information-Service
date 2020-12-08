const express = require('express');
const expressStaticGzip = require('express-static-gzip');
const pathing = require('path');
const mongoose = require('mongoose');
const router = require('./routes/index.js');

const MONGO_HOST = process.env.MONGO_HOST || 'localhost';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3004;
const app = express();
const client = pathing.join(__dirname, '/../client/dist');
mongoose.connect(`mongodb://${MONGO_HOST}/Product`)
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.error("Coudn't connect MongoDB:", err));
app.use((req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
  });
  next();
});
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);
app.use('/products/:product_id', express.static(client));
app.use('/', expressStaticGzip(client, {
  enableBrotli: true,
  orderPreference: ['br', 'gz'],
  setHeaders(res) {
    res.setHeader('Cache-Control', 'public, max-age=31536000');
  },
}));
app.get('*', (req, res) => {
  if (Object.keys(req.params)[0] !== 'product_id') {
    res.status(404);
  }
  res.sendFile(pathing.join(__dirname, './../client/dist/index.html'));
});
app.listen(PORT, () => {
  console.log(`listening on port ${HOST}:${PORT}!`);
});

module.exports = app;
