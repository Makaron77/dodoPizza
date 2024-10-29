

const express = require('express');
const router = express.Router();

const cityRoutes = require('./cities');

router.use('/cities', cityRoutes);

 module.exports = router;