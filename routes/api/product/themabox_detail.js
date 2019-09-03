var express = require('express');
var router = express.Router();

const responseMessage = require('../../../module/response/responseMessage');
const statusCode = require('../../../module/response/statusCode');
const utils = require('../../../module/response/utils');

// 몽고 DB Schema
const Themabox = require('../../../schemas/themabox');

router.get('/', async (req, res) => {
    try {
        const { themabox_id } = req.query;

        if (!themabox_id) {
            res.status(200).json(utils.successFalse(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
        } else {
            var themabox = await Themabox.find({
                _id: themabox_id,
            }).populate('products')

            console.log('테마박스 : ', themabox);
            console.log(themabox[0].products.length);
            
            var productArr = new Array();
            for (var i = 0; i < themabox[0].products.length; i++) {
                var product = new Object();
                product.product_id = themabox[0].products[i]._id;
                product.main_img = themabox[0].products[i].main_img;
                product.name = themabox[0].products[i].name;
                product.price = themabox[0].products[i].price;
                productArr.push(product);
            }
            let data = {
                package_id: themabox[0]._id,
                main_img: themabox[0].main_img,
                name: themabox[0].name,
                sale_ratio: themabox[0].sale_ratio,
                price: themabox[0].price,
                saled_price: Math.round(themabox[0].price * (((100 - themabox[0].sale_ratio) / 100))*0.01) * 100,
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
