import { Sequelize } from "sequelize";

const db = new Sequelize('testdb','sholihin','password',{
    host: "localhost",
    dialect: "mysql"
});

export default db;
