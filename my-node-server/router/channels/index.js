const express = require('express');

const router = express.Router();
const machineController = require('../../app/controllers/machineController');
const { app } = require('../../server/express');

router.get('/get-all-machine', machineController.getAllMachines);
router.post('/delete-machine', machineController.deleteMachine);

app.use('/', router);
app.use(express.json());

