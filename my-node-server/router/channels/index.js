const express = require('express');

const router = express.Router();
const machineController = require('../../app/controllers/machineController');
const { app } = require('../../server/express');

router.get('/get-all-machine-user', machineController.getAllMachinesByUser);
router.get('/get-detail-machine/:machine_select_id', machineController.getDetailMachineById);
router.get('/get-all-machine', machineController.getAllMachines);
router.post('/delete-machine', machineController.deleteMachine);
router.post('/add-machine', machineController.addMachine);
app.use('/', router);
app.use(express.json());

