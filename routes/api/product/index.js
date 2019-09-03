var express = require('express');
var router = express.Router();



router.use('/custom', require('./custom'));
router.use('/regular/detail', require('./regular_detail'));
router.use('/themebox/detail', require('./themebox_detail'));


// api Ver 2.0
router.use('/regular', require('./regular'));
router.use('/themebox', require('./themebox'));
router.use('/main', require('./main'));

module.exports = router;