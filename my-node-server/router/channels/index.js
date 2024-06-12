const express = require('express');
const router = express.Router();
const machineController = require('../../app/controllers/machineController');

router.get('/get-all-machine', machineController.getAllMachines);

module.exports = router;