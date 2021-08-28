const modelUser = require('../models/user');
exports.index = (req, res) => {
    modelUser.find(
        {}, (err, users) => {
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
        ;
    });
}
exports.update = (req, res) => {

}