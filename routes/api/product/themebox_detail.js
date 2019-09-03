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
            }).populate('products')

            console.log('테마박스 : ', themebox);
            console.log(themebox[0].products.length);
            
            var productArr = new Array();
            for (var i = 0; i < themebox[0].products.length; i++) {
                var product = new Object();
                product.product_id = themebox[0].products[i]._id;
                product.main_img = themebox[0].products[i].main_img;
                product.name = themebox[0].products[i].name;
                product.price = themebox[0].products[i].price;
                productArr.push(product);
            }
            let data = {
                package_id: themebox[0]._id,
                main_img: themebox[0].main_img,
                name: themebox[0].name,
                sale_ratio: themebox[0].sale_ratio,
                price: themebox[0].price,
                saled_price: Math.round(themebox[0].price * (((100 - themebox[0].sale_ratio) / 100))*0.01) * 100,
                product: productArr
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
