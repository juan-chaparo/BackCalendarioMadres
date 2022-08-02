import { getConnection, sql, queries } from "../database";

export const getLenguage = async (req, res) => {
  try {
    const { id_lenguage, name_lenguage } = req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_lenguage", id_lenguage)
      .input("Name_lenguage", name_lenguage)
      .query(queries.getAllLenguage);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
