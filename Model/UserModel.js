const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    UserName:{
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref : 'Role'
    },
});

module.exports = mongoose.model('User', userSchema);