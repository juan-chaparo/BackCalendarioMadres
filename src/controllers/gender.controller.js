import { getConnection, sql, queries } from "../database";

export const getGender = async (req, res) => {
  try {
    const { id_gender, name_gender, id_lenguage } = req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_gender", id_gender)
      .input("Name_gender", name_gender)
      .input("Id_lenguage", id_lenguage)
      .query(queries.getAllGender);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
