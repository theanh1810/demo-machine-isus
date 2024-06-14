const Master_Machine_Select = require('@models/MasterMachineSelect');
const Master_Machine = require('@models/MasterMachine');

module.exports = {
    async getAllMachinesByUser (req, res) {
      try {
        const machines = await Master_Machine_Select.findAll({
          where: {
            is_delete: 0,
            user_select: 1
          },
          include: {
            model: Master_Machine,
            required: false, // LEFT JOIN
            // attributes: ['machine_name', 'machine_symbols', 'machine_min', 'machine_max', 'is_active'],
          },
          raw: true,  
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
        const machine = await Master_Machine_Select.update(
          { is_delete: 1 }, // Dữ liệu cần cập nhật
          { where: { machine_select_id: machine_id }} // Điều kiện cập nhật
        );
        res.status(200).json();
      } catch (error) {
        res.status(500).json({ error: 'Something went wrong!' });
      }
    },
    async addMachine(req, res){
      try {
        const machine_arr  = req.body.machine_arr;
        machine_arr.forEach(async item => {
          const machine_user_check = await Master_Machine_Select.findOne(
            {
              where: {
                machine_select_id: item.machine_id,
                user_select: item.user_id
              }
            }
          );
          if(machine_user_check){
            if(machine_user_check.is_delete == 1){
              await Master_Machine_Select.update(
                { is_delete: 0 },
                { where: { machine_select_id: item.machine_id, user_select: item.user_id } }
              );
            }
          }else{
            await Master_Machine_Select.create(
              {
                machine_id: item.machine_id,
                user_select: item.user_id,
                is_delete: 0
              }
            );
            console.log('a');
          }
        })
        res.status(200).json();
      } catch (error) {
        res.status(500).json({ error: 'Something went wrong!' });
      }
    },
    async getDetailMachineById(req, res){
      try {
        const machine_id = req.params.machine_select_id;
        const machines = await Master_Machine_Select.findOne({
          where: {
            machine_select_id: machine_id
          },
        });
        const machine_info = await Master_Machine.findOne({
          where: {
            machine_id: machines.machine_id
          },
        });
        res.json(machine_info);
      } catch (error) {
        res.status(500).json({ error: 'Something went wrong!' });
      }
    }
};