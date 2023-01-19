import dotenv from 'dotenv';
dotenv.config();

export default {
  sequelize_db: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
    seederStorage: "sequelize",
  },
};
