const express = require('express');
const router = express.Router();
const  controller = require('@controllers/machineController');

router.get('/get-all-machine', controller.getAllMachine);

module.exports = router;