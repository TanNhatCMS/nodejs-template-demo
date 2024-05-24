const express = require('express');
const routes = express.Router();
const path = require('path');

routes.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(process.cwd(), 'views', 'add-product.html'));
})
routes.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/admin/add-product');
})

module.exports = routes;
