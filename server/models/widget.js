const mongoose = require("mongoose");



const WidgetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    material: {
        type: String,
        required: true
    },
    componentIds:[{ 
        type: Number
    }],
    numComponents: {
        type: Number,
        default: 1
    }
});

const WidgetModel = mongoose.model('Widget', WidgetSchema);

module.exports = WidgetModel;