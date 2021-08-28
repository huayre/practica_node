const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
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
userScheme.plugin(mongoosePaginate);
const User = mongoose.model('User', userScheme);
module.exports = User;