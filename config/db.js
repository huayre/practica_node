const mongoose = require('mongoose');
exports.connect = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (error) => {
        (error) ? console.log('error BBDD en  conexion') : console.log('conexión BBDD existosa..!!');
    });
    console.log(process.env.DB_URI);
}



