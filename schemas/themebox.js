const mongoose = require('mongoose');

const { Schema } = mongoose;

const themeboxSchema = new Schema({
    // 상품 대표 이미지
    main_img: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Themebox', themeboxSchema)