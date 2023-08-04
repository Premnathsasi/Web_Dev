const path = require('path')

const adminRoutes = require('./routes/admin');
const shopRouter = require('./routes/shop');
const contactRouter = require('./routes/contact')
const successRouter = require('./routes/success')

const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use('/shop', shopRouter);
app.use(contactRouter);
app.use(successRouter)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})




app.listen(4000)
