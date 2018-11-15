const express = require('express');
let router = express.Router();

const shop_controller = require('../controllers/shop.controller');

router.get('/create', shop_controller.shop_create_get);
router.post('/create', shop_controller.shop_create_post);
router.get('/:id/delete', shop_controller.shop_delete_get);
router.post('/:id/delete', shop_controller.shop_delete_post);
router.get('/:id/update', shop_controller.shop_update_get);
router.post('/:id/update', shop_controller.shop_update_post);
router.get('/:id', shop_controller.shop_detail);
router.get('/', shop_controller.shop_list);

module.exports = router;
