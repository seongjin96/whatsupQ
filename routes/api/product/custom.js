var express = require('express');
var router = express.Router();

const responseMessage = require('../../../module/response/responseMessage');
const statusCode = require('../../../module/response/statusCode');
const utils = require('../../../module/response/utils');

// 몽고 DB Schema
const Product = require('../../../schemas/product');
const Themebox = require('../../../schemas/themebox');

router.get('/', async (req, res) => {
    try {
        let { first, second, fifth, minprice, maxprice } = req.query;

        if (!first || !second || !fifth || !minprice || !maxprice) {
            res.status(200).json(utils.successFalse(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
        } else {
            // first, second, fifth로 들어온 값에 있는 띄어쓰기 다 붙여주기
            first = first.replace(/\s/gi, "");
            second = second.replace(/\s/gi, "");
            fifth = fifth.replace(/\s/gi, "");


            var themebox = await Themebox.find({
                $or: [{ category: first }, { category: second }]
            })

            var regularity = await Product.find({
                $or: [{ category: first }, { category: second }],
                saled_price: { $gte: parseInt(minprice), $lte: parseInt(maxprice) },
            })

            var not_regularity = await Product.find({
                category: { $in: [fifth] },
                saled_price: { $gte: parseInt(minprice), $lte: parseInt(maxprice) },
            })

            themebox.sort(function () {
                return Math.random() - Math.random();
            });

            regularity.sort(function () {
                return Math.random() - Math.random();
            });

            not_regularity.sort(function () {
                return Math.random() - Math.random();
            });

            if (regularity.length > 5) { regularity.length = 5; }
            if (not_regularity.length > 5) { not_regularity.length = 5; }

            let regular_data = [];
            let notImportant_data = [];

            let themebox_data = {
                    themebox_id: themebox[0]._id,
                    main_img: themebox[0].img[0]
                }
            for (var i = 0; i < regularity.length; i++) {
                regular_data[i] = {
                    product_id: regularity[i]._id,
                    main_img: regularity[i].main_img,
                    name: regularity[i].name,
                    saled_price: regularity[i].saled_price
                }
            }
            for (var i = 0; i < not_regularity.length; i++) {
                notImportant_data[i] = {
                    product_id: not_regularity[i]._id,
                    main_img: not_regularity[i].main_img,
                    name: not_regularity[i].name,
                    saled_price: not_regularity[i].saled_price
                }
            }

            let data = {
                themeboxes: themebox_data,
                regularity: regular_data,
                regular_not_Important: notImportant_data
            }
            res.status(200).json(utils.successTrue(statusCode.OK, responseMessage.READ_SUCCESS, data));
        }
    }
    catch (err) {
        console.log(err);
        res.status(200).json(utils.successFalse(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
    }
})

module.exports = router;