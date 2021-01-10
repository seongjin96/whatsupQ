var express = require('express');
var router = express.Router();

router.use('/signin', require('./signin'));
router.use('/signup', require('./signup'));
router.use('/findID', require('./findID'));
router.use('/findPW', require('./findPW'));
router.use('/resignin', require('./resignin'));

module.exports = router;
