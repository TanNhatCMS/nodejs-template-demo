const express = require('express');
const path = require("path");
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('pages/index', { title: 'Home Page'});
});

router.use('/product', (req, res, next) => {
  res.sendFile(path.join(process.cwd(), 'views/html', 'shop.html'));
})

module.exports = router;
