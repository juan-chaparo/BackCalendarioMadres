import dotenv from "dotenv";

dotenv.config();
export const config = {
  user: process.env.user,
  password: process.env.password,
  dbPort: process.env.dbPort,
  dbName: process.env.dbName,
  dbHost: process.env.dbHost,
};
