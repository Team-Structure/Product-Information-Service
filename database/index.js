const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Product', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error ');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

const product = mongoose.Schema({
  product_Id: Number,
  description: String,
  title: String,
  brand: String,
  category: {
    name: String,
    age: String,
    player_Count: String,
  },

  specs: {
    part_Number: String,
    GTIN: Number,
  },

});

module.exports.Product = mongoose.model('Product', product);
