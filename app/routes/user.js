const express = require('express');
const router = express.Router();
const controllerUser = require('../controllers/ControllerUser')

router.get('/user', controllerUser.index);
router.post('/user', controllerUser.store);
router.put('/user/:id', controllerUser.update);
router.delete('/user/:id', controllerUser.delete);
router.post('/user/img',controllerUser.upload.single('image'));
module.exports = router;
