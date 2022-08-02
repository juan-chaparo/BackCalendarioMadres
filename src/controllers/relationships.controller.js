import { getConnection, sql, queries } from "../database";

export const getRelationships = async (req, res) => {
  try {
    const { id_relationship, name_relationship, id_lenguage } = req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_relationship", id_relationship)
      .input("Name_relationship", name_relationship)
      .input("Id_lenguage", id_lenguage)
      .query(queries.getAllRelationships);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
