import { getConnection, sql, queries } from "../database";

export const getMunicipalities = async (req, res) => {
  try {
    const { id_municipality, name_municipality, id_departments } = req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_municipality", id_municipality)
      .input("Name_municipality", name_municipality)
      .input("Id_departments", id_departments)
      .query(queries.getAllMunicipalities);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
