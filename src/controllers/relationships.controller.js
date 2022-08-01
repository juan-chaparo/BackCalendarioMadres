import { getConnection, sql, queries } from "../database";

export const getRelationships = async (req, res) => {
  try {
    const { id_relationship, name_relationship, name_relationship_esp } =
      req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_relationship", id_relationship)
      .input("Name_relationship", name_relationship)
      .input("Name_relationship_esp", name_relationship_esp)
      .query(queries.getAllRelationships);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
