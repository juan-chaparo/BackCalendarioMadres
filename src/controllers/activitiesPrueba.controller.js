import { getConnection, sql, queries } from "../database";

export const getPrueba = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(select(1));
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
