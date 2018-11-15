const express = require('express');
let router = express.Router();

const coupon_controller = require('../controllers/coupon.controller');

router.get('/create', coupon_controller.coupon_create_get);
router.post('/create', coupon_controller.coupon_create_post);
router.get('/:id/delete', coupon_controller.coupon_delete_get);
router.post('/:id/delete', coupon_controller.coupon_delete_post);
router.get('/:id/update', coupon_controller.coupon_update_get);
router.post('/:id/update', coupon_controller.coupon_update_post);
router.get('/:id', coupon_controller.coupon_detail);
router.get('/', coupon_controller.coupon_list);

module.exports = router;
