var express = require('express');
var router = express.Router();
const responseMessage = require('../../../module/response/responseMessage');
const statusCode = require('../../../module/response/statusCode');
const utils = require('../../../module/response/utils');

// 몽고 DB Schema
const Themebox = require('../../../schemas/themebox');

// 테마박스 상품 리스트 보여주기
router.get('/', async (req, res) => {
    try {
        const { category, flag } = req.query;
        if (!category || !flag) {
            res.status(200).json(utils.successFalse(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
        } else {
            // 최신순
            if (flag == 1) {
                var themebox = await Themebox.find({
                    category: { $in: [category]},
                }).
                sort({ created_at: 'desc' })

            // 가격 낮은 순
            } else if (flag == 3) {
                var themebox = await Themebox.find({
                    category: { $in: [category]},
                }).
                sort({ price: 'asc' })

            // 가격 높은 순
            } else if (flag == 4) {
                var themebox = await Themebox.find({
                    category: { $in: [category]},
                }).
                sort({ price: 'desc' })
            }

            let themebox_data = [];
            for(let i = 0; i < themebox.length; i++) {
                themebox_data[i] = {
                    themebox_id: themebox[i]._id,
                    main_img: themebox[i].img[0],
                }
            }

            const data = {
                themebox_count: themebox.length,
                themeboxes: themebox_data
            }
            
            res.status(200).json(utils.successTrue(statusCode.OK, responseMessage.READ_SUCCESS, data));
        }
    } catch (err) {
        console.log(err);
        res.status(200).json(utils.successFalse(statusCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR));
    }
})

module.exports = router;

