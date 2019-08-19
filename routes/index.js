var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


//personel access token
//9fa849ae19599bb75fbbe68a30c88ea2fb4fc6f4