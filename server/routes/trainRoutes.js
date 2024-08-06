const express = require('express');
const router = express.Router();
const trainController = require('../controllers/trainController');

router.post('/update-location', trainController.updateLocation);
router.post('/change-engine', trainController.changeEngine);
router.get('/routes', trainController.getRoutes);

module.exports = router;
