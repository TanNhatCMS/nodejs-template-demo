const express = require('express');
const routes = express.Router();
const path = require('path');
routes.use('/product', (req, res, next) => {
    res.sendFile(path.join(process.cwd(), 'views', 'shop.html'));
})

module.exports = routes;
