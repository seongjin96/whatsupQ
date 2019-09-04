const mongoose = require('mongoose');

const { Schema } = mongoose;

const themeboxSchema = new Schema({
    // 패키지 대표 이미지
    img: {
        type: [String],
        required: true
    },
    // 가격
    price: {
        type: Number,
        required: true
    },
    // 패키지 상품을 등록한 시간
    created_at: {
        type: Date,
        default: Date.now
    },
    // 패키지 상품을 가장 최근에 수정한 시간
    updated_at: {
        type: Date
    },
    // 패키지 상품을 삭제한 시간
    deleted_at: {
        type: Date
    },
    // 분류
    category: {
        type: [String]
    }
})
module.exports = mongoose.model('Themebox', themeboxSchema)