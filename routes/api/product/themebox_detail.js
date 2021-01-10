var express = require('express');
var router = express.Router();

const responseMessage = require('../../../module/response/responseMessage');
const statusCode = require('../../../module/response/statusCode');
const utils = require('../../../module/response/utils');

// 몽고 DB Schema
const Themebox = require('../../../schemas/themebox');

router.get('/', async (req, res) => {
    try {
        const { themebox_id } = req.query;

        if (!themebox_id) {
            res.status(200).json(utils.successFalse(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
        } else {
            var themebox = await Themebox.find({
                _id: themebox_id,
            })

            console.log('테마박스 : ', themebox);
 
            let data = {
                themebox_id: themebox[0]._id,
                price: themebox[0].price,
                img: themebox[0].img,
            }
            res.status(200).json(utils.successTrue(statusCode.OK, responseMessage.READ_SUCCESS, data));
        }
    }
    catch (err) {
        console.log(err);
        if (err.name == 'CastError' && err.kind == 'ObjectId') {
            res.status(200).json(utils.successFalse(statusCode.BAD_REQUEST, responseMessage.WRONG_PARAMS));
        } else {
            res.status(200).json(utils.successFalse(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
        }
        
    }
})

module.exports = router;
