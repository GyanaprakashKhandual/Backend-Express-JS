const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    prodcutId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity: {
       type: Number,
       required: true 
    }
});


const orderSchema = new mongoose.Schema({

    orderPrice: {
        type: Number,
        required: true,
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    orderItems: {
        type: [orderItemSchema]
    },
    adress: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Cancelled', 'Delivered'],
        default: 'Pending'
    }

}, {timestamps: true});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;