const express = require('express');
const router = express.Router();
const Controller = require('../controller/controller');


router.get('/chitien/:id', Controller.chi_item_get_all);
router.post('/chitien/:id', Controller.chi_item_them);
router.put('/chitien/:id', Controller.chi_item_sua);
router.delete('/chitien/:id', Controller.chi_item_xoa);

router.get('/chitieninday/:id', Controller.chi_item_get_in_day);
// router.get('/thunhapinday/:id', Controller.thu_item_get_in_day);

router.get('/thunhap/:id', Controller.thu_item_get_all);
router.post('/thunhap/:id', Controller.thu_item_them);
router.put('/thunhap/:id', Controller.thu_item_sua);
router.delete('/thunhap/:id', Controller.thu_item_xoa);

router.post('/acc', Controller.acc_them);

router.post('/login', Controller.login);



module.exports = router;