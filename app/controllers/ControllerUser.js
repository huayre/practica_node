const modelUser = require('../models/user');
exports.index = (req, res) => {
    modelUser.find(
        {}, (err, users) => {
            res.send(users);
        });
}