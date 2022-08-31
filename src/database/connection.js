import {} from "../../";
async function seq() {
  const user = encodeURIComponent(config.user);
  const password = encodeURIComponent(config.password);
  const URI = `postgres://${user}:${password}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
  const sequelize = new Sequelize(URI, {
    dialect: "postgres",
    logging: true,
  });
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
seq();
//setUpModels(sequelize);
//export { sequelize };

/* //import sql from "mssql";
import Sequelize from "sequelize";
import setUpModels from "../../database/models";
import { config } from "../../config/config";

const user = encodeURIComponent(config.user);
const password = encodeURIComponent(config.password);
const URI = `postgres://${user}:${password}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
const sequelize = new Sequelize(URI, {
  dialect: "postgres",
  logging: true,
});
setUpModels(sequelize);
export { sequelize }; */

/* export async function getConnection() {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.log(error);
  }
}
export { sql }; */
