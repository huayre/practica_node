const express = require('express');
const router = express.Router();
const controllerUser = require('../controllers/ControllerUser')

router.get('/user',controllerUser.index);
module.exports = router;
