const Master_Machine = require('@models/MasterMachine');


module.exports = {
    async getAllMachines (req, res) {
    try {
      const machines = await Master_Machine.findAll();
      console.log(machines);
      res.json(machines);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong!' });
    }
  }
};