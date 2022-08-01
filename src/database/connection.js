import sql from "mssql";

const dbSettings = {
  user: "Juan",
  password: "741",
  server: "localhost",
  database: "AppMotricidad",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

export async function getConnection() {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.log(error);
  }
}
export { sql };
