import { getConnection, sql, queries } from "../database";

export const getAspects = async (req, res) => {
  try {
    const { id_aspect, name_aspect, id_lenguage } = req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_aspect", id_aspect)
      .input("Name_aspect", name_aspect)
      .input("Id_lenguage", id_lenguage)
      .query(queries.getAllAspects);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
