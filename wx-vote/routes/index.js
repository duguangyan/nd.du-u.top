var express = require('express');
var router = express.Router();
var BusinessError = require('../error/BusinessError');
/* GET home page. */
router.get('/', function(req, res, next) {
     // throw new BusinessError(101, '身份证号码有误，请重填')
    // res.json(req.query);
   //res.render('index', { title: 'Express' });
});

module.exports = router;
