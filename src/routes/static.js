const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Welcome to Walla-it');

});

module.exports = router;