import * as http from "http";

var express = require('express');
var router = express.Router();
var BusinessError = require('../error/BusinessError');
/* GET home page. */
router.get('/', function(req, res, next) {

    var body_request={
        hostname:'open.weixin.qq.com',
        path:'/connect/oauth2/authorize?appid=wx40dd1ed6ab6087b2&redirect_uri=http://nd.du-u.top&response_type=code&scope=snsapi_base&state=123#wechat_redirect',
        port:80
    };
    http.request(body_request,(res)=>{
        var content='';
        res.setEncoding('utf-8');
        res.on('data',(chunk)=>{
            res.json(chunk);
        });
        res.on('end',()=>{
            console.log(content);
        })
    }).end();
     // throw new BusinessError(101, '身份证号码有误，请重填')
    // res.json(req.query.echostr);
   //res.render('index', { title: 'Express' });
});

module.exports = router;
