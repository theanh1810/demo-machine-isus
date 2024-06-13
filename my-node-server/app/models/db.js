const { Sequelize, DataTypes } = require('sequelize')
const moment = require('moment')

const mysql = require('mysql2');

const { DB_CONNECTION, DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env

DataTypes.DATE.prototype._stringify = function _stringify(date, options) {
	date = this._applyTimezone(date, options);

	return date.format('YYYY-MM-DD HH:mm:ss.SSS');
}
  const Db = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
	host: DB_HOST,
	dialect: 'mysql',
	logging: false, // tắt log nếu không cần thiết
  });
function getDateTimeFormat(field) {
	return moment(this.getDataValue(field)).utcOffset(0).format('YYYY-MM-DD HH:mm:ss').toString()
}

function getTimeFormat(field) {
	return moment(this.getDataValue(field)).utcOffset(0).format('HH:mm:ss').toString()
}

function getDateFormat(field) {
	return moment(this.getDataValue(field)).format('YYYY-MM-DD').toString()
}

module.exports = {
	Db,
	getDateTimeFormat,
	getDateFormat,
	getTimeFormat
}