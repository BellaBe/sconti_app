const express = require('express');
let router = express.Router();

const city_controller = require('../controllers/city.controller');

router.get('/create', city_controller.city_create_get);
router.post('/create', city_controller.city_create_post);
router.get('/:id/delete', city_controller.city_delete_get);
router.post('/:id/delete', city_controller.city_delete_post);
router.get('/:id/update', city_controller.city_update_get);
router.post('/:id/update', city_controller.city_update_post);
router.get('/:id', city_controller.city_detail);
router.get('/', city_controller.city_list);

module.exports = router;
