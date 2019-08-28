var express = require('express');
var router = express.Router();
const utils = require('../../../module/response/utils');
const resMessage = require('../../../module/response/responseMessage');
const statusCode = require('../../../module/response/statusCode');
const pool = require('../../../config/dbConfig');

router.get('/', async (req, res) => {
    try {
        var connection = await pool.getConnection();
        const { birth, phone } = req.query;
        if (!birth || !phone) {
            res.status(200).json(utils.successFalse(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
        } else {
            let query = "SELECT email FROM users WHERE birth = ? AND phone = ?";
            let result = await connection.query(query, [birth, phone]);
            console.log(result[0]);
            if (!result) {
                res.status(200).json(utils.successFalse(statusCode.BAD_REQUEST, resMessage.NULL_VALUE)); // 수정 필요
            } else {
                const data = result[0];
                res.status(200).json(utils.successTrue(statusCode.OK, resMessage.READ_SUCCESS, data)); // 수정 필요
            }
        }
    } catch (err) {
        console.log(err);
        res.status(200).json(utils.successFalse(statusCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR));
    } finally {
        connection.release();
    }
})
module.exports = router;