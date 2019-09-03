var express = require('express');
var router = express.Router();
const responseMessage = require('../../../module/response/responseMessage');
const statusCode = require('../../../module/response/statusCode');
const utils = require('../../../module/response/utils');

// 몽고 DB Schema
const Product = require('../../../schemas/product');
const Special = require('../../../schemas/special');
const Themabox = require('../../../schemas/themabox');

router.get('/', async (req, res) => {
    try {
        var special = await Special.find({}, { main_img: true })

        var today = await Product.find({}, { main_img: true }).skip(5)

        var product = await Product.find({}, { main_img: true }).limit(5)

        var themabox = await Themabox.find({}, { main_img: true })

        console.log(special[0]._id);
        console.log(special[0]);
        console.log(special[0].main_img);
        let special_data = [];
        let today_data = [];
        let product_data = [];

        for (var i = 0; i < special.length; i++) {
            special_data[i] = {
                special_id: special[i]._id,
                main_img: special[i].main_img,
            }
        }
        console.log(special_data);
        for (var i = 0; i < today.length; i++) {
            today_data[i] = {
                product_id: today[i]._id,
                main_img: today[i].main_img,
            }
        }
        for (var i = 0; i < product.length; i++) {
            product_data[i] = {
                product_id: product[i]._id,
                main_img: product[i].main_img,
            }
        }
        let themabox_data = {
            themabox_id: themabox[0]._id,
            main_img: themabox[0].main_img
        }

        const data = {
            special: special_data,
            today: today_data,
            product: product_data,
            themabox: themabox_data
        }
        console.log(data);
        res.status(200).json(utils.successTrue(statusCode.OK, responseMessage.READ_SUCCESS, data));
    } catch (err) {
        console.log(err);
        res.status(200).json(utils.successFalse(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
    }
})
module.exports = router;