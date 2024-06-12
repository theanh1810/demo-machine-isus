const { DataTypes } = require('sequelize')
const { Db, getDateTimeFormat } = require('./Db')
const { INTEGER } = require('sequelize')

const { STRING, DATE, FLOAT, BOOLEAN } = DataTypes

const Master_Machine = Db.define('MasterMachine', {
	id: { type: INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: STRING },
	symbols: { type: STRING },
	max: { type: INTEGER},
	min: { type: INTEGER},
	user_created: { type: INTEGER },
	time_created: { type: DATE, get() { return getDateTimeFormat.call(this, 'Time_Created') } },
	user_updated: { type: INTEGER },
	time_updated: { type: DATE, get() { return getDateTimeFormat.call(this, 'Time_Updated') } },
	is_delete: { type: BOOLEAN },
}, {
	tableName: 'master_machine',
	timestamps: true,
	createdAt: 'time_created',
	updatedAt: 'time_updated'
})

module.exports = Master_Machine