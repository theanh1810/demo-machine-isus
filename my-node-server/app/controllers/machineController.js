const Master_Machine_Select = require('@models/MasterMachineSelect');
const Master_Machine = require('@models/MasterMachine');

module.exports = {
    async getAllMachinesByUser (req, res) {
      try {
        const machines = await Master_Machine_Select.findAll({
          where: {
            is_delete: 0
          }
        });
        res.json(machines);
      } catch (error) {
        res.status(500).json({ error: 'Something went wrong!' });
      }
    },
    async getAllMachines (req, res) {
      try {
        const machines = await Master_Machine.findAll({
          where: {
            is_delete: 0
          }
        });
        res.json(machines);
      } catch (error) {
        res.status(500).json({ error: 'Something went wrong!' });
      }
    },
    async deleteMachine(req, res){
      try {
        const machine_id  = req.body.machine_id;
        const machine = await Master_Machine.update(
          { is_delete: 1 }, // Dữ liệu cần cập nhật
          { where: { id: machine_id } } // Điều kiện cập nhật
        );
        res.status(200).json();
      } catch (error) {
        res.status(500).json({ error: 'Something went wrong!' });
      }
    }
};