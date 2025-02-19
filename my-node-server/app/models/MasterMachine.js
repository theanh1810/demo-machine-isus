const { DataTypes } = require('sequelize')
const { Db, getDateTimeFormat } = require('./db')
const { INTEGER } = require('sequelize')

const { STRING, DATE, FLOAT, BOOLEAN } = DataTypes

const Master_Machine = Db.define('MasterMachine', {
	machine_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
	machine_name: { type: STRING },
	machine_symbols: { type: STRING },
	machine_image: {type: STRING},
	machine_max: { type: INTEGER},
	machine_min: { type: INTEGER},
	user_created: { type: INTEGER },
	time_created: { type: DATE, get() { return getDateTimeFormat.call(this, 'Time_Created') } },
	user_updated: { type: INTEGER },
	time_updated: { type: DATE, get() { return getDateTimeFormat.call(this, 'Time_Updated') } },
	is_delete: { type: BOOLEAN },
	is_active: {type: BOOLEAN}
}, {
	tableName: 'master_machine',
	timestamps: true,
	createdAt: 'time_created',
	updatedAt: 'time_updated'
})

module.exports = Master_Machine  