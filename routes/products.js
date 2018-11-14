const express = require('express');
let router = express.Router();

const product_controller = require('../controllers/product.controller');

router.get('/create', product_controller.product_create_get);
router.post('/create', product_controller.product_create_post);
router.get('/:id/delete', product_controller.product_delete_get);
router.post('/:id/delete', product_controller.product_delete_post);
router.get('/:id/update', product_controller.product_update_get);
router.post('/:id/update', product_controller.product_update_post);
router.get('/:id', product_controller.product_detail);
router.get('/', product_controller.product_list);

module.exports = router;
