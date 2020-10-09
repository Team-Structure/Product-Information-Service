const express = require('express');

const router = express.Router();
/* ----------------------- Internal---------- */
router.get('title/:product_Id', (req, res) => {
  // if(req.query)
  // helper(req)
  // get data from mongodb and send back to client
  res.send('hello');
});
router.get('brand/:product_Id', (req, res) => {
  res.send('brand');
});

/* ----------------------- External---------- */
router.get('reviews/product_id');
