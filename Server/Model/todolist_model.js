const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    status: {
       type: Boolean,
       required: false
    }
},{timestamps: true});

module.exports = mongoose.model('Tasks',taskSchema);