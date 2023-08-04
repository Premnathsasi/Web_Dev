const path = require('path');

const express = require('express')

const rootDir = require('../util/path')
const router = express.Router();

router.get('/contact', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact.html'))
})

router.post('/contact', (req, res, next) => {
    console.log(req.body);
    res.redirect('/sucess')
});

module.exports = router