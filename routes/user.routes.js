const express = require('express');
let router = express.Router();

const user_controller = require('../controllers/user.controller');

router.get('/create', user_controller.user_create_get);
router.post('/create', user_controller.user_create_post);
router.get('/:id/delete', user_controller.user_delete_get);
router.post('/:id/delete', user_controller.user_delete_post);
router.get('/:id/update', user_controller.user_update_get);
router.post('/:id/update', user_controller.user_update_post);
router.get('/:id', user_controller.user_detail);
router.get('/', user_controller.user_list);

module.exports = router;
