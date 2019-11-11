'use strict';

const HOST = 'localhost',
	PORT = 3000,
	DB = 'todo',
	URI = 'mongodb://' + HOST + '/' + DB;

module.exports = {
	HOST: HOST,
	PORT: PORT,
	DB: DB,
	URI: URI
};
