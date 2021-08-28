const mongoose = require('mongoose');
const DB_URI = 'mongodb+srv://huayre:huayre_crud_node@cluster0.3bj0h.mongodb.net/crud?retryWrites=true&w=majority'

exports.connect = () => {
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (error) => {
        (error) ? console.log('error BBDD en  conexion') : console.log('conexión BBDD existosa..!!');
    });
}



