import { Sequelize } from 'sequelize';
import'../mysql2/index.js';

const db = new Sequelize('db_penggajian3', 'root', 'st212816', {
    host: "localhost",
    dialect: "mysql"
});

export default db;