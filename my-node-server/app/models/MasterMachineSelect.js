const { DataTypes } = require('sequelize')
const { Db, getDateTimeFormat } = require('./db')
const { INTEGER, Op } = require('sequelize')
const Master_Machine = require('./MasterMachine')

const { STRING, DATE, FLOAT, BOOLEAN } = DataTypes

const Master_Machine_Select = Db.define('MasterMachineSelect', {
	machine_select_id : { type: INTEGER, primaryKey: true, autoIncrement: true },
	machine_id: { type: INTEGER},
    user_select: { type: INTEGER},
	is_delete: { type: BOOLEAN },
}, {
	tableName: 'master_machine_select',
	timestamps: false
})

Master_Machine_Select.belongsTo (Master_Machine, {
	foreignKey: 'machine_id',
  });

module.exports = Master_Machine_Select  