const mongoose = require('mongoose');
const modelUser = require('../models/user');
const multer = require('multer');
const options = {
    page: 1,
    limit: 5,
    collation: {
        locale: 'en',
    },
};
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '-' + file.originalname)
    }
})

exports.upload = multer({storage: storage})

exports.index = function(req, res) {
    modelUser.paginate(
        {}, options, (err, users) => {
            res.send(users);
        });
}

exports.store = (req, res) => {
    modelUser.create(req.body, function (err, user) {
        if (!err) {
            res.send({
                data: user
            })
        } else {
            res.send({
                error: err
            }, 422)
        }
    });
}
exports.update = (req, res) => {
    const id = convertToObjectID(req.params.id);
    modelUser.updateOne({_id: id}, req.body, function (err, user) {
        if (!err) {
            res.send({data: user})
        } else {
            res.send({error: err})
        }
    });
}

exports.delete = (req, res) => {
    const id = convertToObjectID(req.params.id);
    modelUser.deleteOne({_id: id}, function (err, user) {
        if (!err) {
            res.send({data: user})
        } else {
            res.send({error: err})
        }
    });
}

function convertToObjectID(id) {
    return mongoose.Types.ObjectId(id);
}