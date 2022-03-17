const mongoose = require('mongoose');
const { Schema } = mongoose;

const CarSchema = new Schema({
    brand: {type: String, required: true},
    model: {type: String, required: true},
    year: {type: Number, required: true},
    price: {type: Number, required: true}
});

module.exports = mongoose.model('car', CarSchema);