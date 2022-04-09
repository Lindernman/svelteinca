import pkg from 'pg';
const { Pool } = pkg;
const db = new Pool({
	user: 'postgres',
	port: 5432,
	host: 'localhost',
	database: 'postgres',
	password: 'inacap'
});

export default db;
