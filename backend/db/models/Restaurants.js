const mongoose = require('mongoose');


const Restaurant = new mongoose.Schema({
    restaurantName: { type: String, required: true },
    typeOfFood: { type: String, required: true },
    discription: { type: String, required: true },
    images: { type: Array, required: true },
    location: { type: String, required: true },
    menu: { type: mongoose.Schema.ObjectId, ref: 'Menu' },
    review: { type: mongoose.Schema.ObjectId, ref: 'Review' }
});

module.exports = mongoose.model('restaurant',Restaurant);







