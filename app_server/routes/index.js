const express = require('express');
const router = express.Router();

const ctrlTravelers = require('../controllers/travelers');

router.get('/travel', ctrlTravelers.travel);

module.exports = router;