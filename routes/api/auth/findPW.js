var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

const utils = require('../../../module/response/utils');
const resMessage = require('../../../module/response/responseMessage');
const statusCode = require('../../../module/response/statusCode');
const cryptoPassword = require('../../../module/cryptoPassword');
const pool = require('../../../config/dbConfig');

router.put('/', async (req, res) => {
    try {
        var connection = await pool.getConnection();
        const { email, phone } = req.body;
        if (!email || !phone) {
            res.status(200).json(utils.successFalse(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
        } else {
            let query = "SELECT email FROM users WHERE email = ? AND phone = ?";
            let result = await connection.query(query, [email, phone]);
            if (!result) {
                res.status(200).json(utils.successFalse(statusCode.BAD_REQUEST, resMessage.NULL_VALUE)); // 수정 필요
            }
            //아이디가 존재할 경우 
            else {
                //숫자 + 문자 + 특수문자 새로운 비밀번호 생성
                var arr = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z".split(",");
                var randomPw = createCode(arr, 10);

                //비밀번호 랜덤 함수
                function createCode(objArr, iLength) {
                    var arr = objArr;
                    var randomStr = "";
                    for (var j = 0; j < iLength; j++) {
                        randomStr += arr[Math.floor(Math.random() * arr.length)];
                    }
                    return randomStr
                }

                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'whatsubq@gmail.com',
                        pass: 'sksmsqkqhek12!@'
                    }
                });

                var mailOptions = {
                    from: 'whatsubq@gmail.com',
                    to: result[0].email,
                    subject: '임시 비밀번호를 알려드립니다.',
                    text: '임시 비밀번호는 ' + randomPw + '입니다.'
                };

                transporter.sendMail(mailOptions, async (error, info) => {
                    if (error) {
                        console.log(error);
                    }
                    else {
                        console.log('Email sent! : ' + info.response);
                        const salt = await cryptoPassword.salt();
                        let password = await cryptoPassword.hashedPassword(randomPw, salt);

                        query = 'UPDATE users SET salt = ?, password = ? WHERE email = ?';
                        console.log(result[0].email);
                        const result_user = await connection.query(query, [salt, password, (result[0].email)]);
                        await connection.commit();
                        res.status(200).json(utils.successTrue(statusCode.CREATED, resMessage.SAVE_SUCCESS));
                    }
                    transporter.close();
                });
            }
        }
    } catch (err) {
        connection.rollback();
        console.log(err);
        res.status(200).json(utils.successFalse(statusCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR));
    } finally {
        connection.release();
    }
})
module.exports = router;