const express = require('express');
let router = express.Router();

const discount_controller = require('../controllers/discount.controller');

router.get('/create', discount_controller.discount_create_get);
router.post('/create', discount_controller.discount_create_post);
router.get('/:id/delete', discount_controller.discount_delete_get);
router.post('/:id/delete', discount_controller.discount_delete_post);
router.get('/:id/update', discount_controller.discount_update_get);
router.post('/:id/update', discount_controller.discount_update_post);
router.get('/:id', discount_controller.discount_detail);
router.get('/', discount_controller.discount_list);

module.exports = router;
