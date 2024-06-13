const { DataTypes } = require('sequelize')
const { Db, getDateTimeFormat } = require('./db')
const { INTEGER } = require('sequelize')

const { STRING, DATE, FLOAT, BOOLEAN } = DataTypes

const Master_Machine_Select = Db.define('MasterMachineSelect', {
	machine_select_id : { type: INTEGER, primaryKey: true, autoIncrement: true },
	machine_select_name: { type: STRING },
	machine_select_symbols: { type: STRING },
	machine_select_image: {type: STRING},
	machine_select_max: { type: INTEGER},
	machine_select_min: { type: INTEGER},
     user_select: { type: INTEGER},
	user_created: { type: INTEGER },
	time_created: { type: DATE, get() { return getDateTimeFormat.call(this, 'Time_Created') } },
	user_updated: { type: INTEGER },
	time_updated: { type: DATE, get() { return getDateTimeFormat.call(this, 'Time_Updated') } },
	is_delete: { type: BOOLEAN },
	is_active: {type: BOOLEAN}
}, {
	tableName: 'master_machine_select',
	timestamps: true,
	createdAt: 'time_created',
	updatedAt: 'time_updated'
})

module.exports = Master_Machine_Select  