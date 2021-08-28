const modelUser = require('../models/user');
const options = {
    page: 1,
    limit: 5,
    collation: {
        locale: 'en',
    },
};

exports.index = (req, res) => {
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
        ;
    });
}
exports.update = (req, res) => {

}