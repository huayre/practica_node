const mongoose = require('mongoose')
const userScheme = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            default: 'https/image.com'
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
    },
    {
        timestamps : true
    });
console.log('creando el model user');
const User = mongoose.model('User', userScheme);
module.exports = User;