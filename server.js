const express = require('express');
const app = express();
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
const bodyParser = require('body-parser');
const path = require('path');
app.use(bodyParser.urlencoded({extended: true}));

app.use('/admin', adminRoute);
app.use(shopRoute);
app.get('/', (req, res, next) => {
    res.send('<h1>Hello from Express</h1>');
})

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(process.cwd(), 'views', '404.html'));
})


app.listen(3000, () => {
    console.log('Server is running on port 3000 http://localhost:3000/');
    console.log('Server is running on port 3000 http://localhost:3000/add-product');
    console.log('Server is running on port 3000 http://localhost:3000/product');
})
