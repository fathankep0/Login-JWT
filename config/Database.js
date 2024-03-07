import { Sequelize } from "sequelize";

const db = new Sequelize('testdb','sholihin','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;
