const express = require('express');
const router = express.Router();
const puppysCtrl = require('../../controllers/api/puppys');

router.get('/', puppysCtrl.index);
router.post('/', puppysCtrl.create);
router.get('/:id', puppysCtrl.show);
router.put('/:id', puppysCtrl.update);
router.delete('/:id', puppysCtrl.delete);

module.exports = router;