import { getConnection, sql, queries } from "../database";

export const getActivitiesMaterials = async (req, res) => {
  try {
    const { id_activity_material, id_material, id_activity } = req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_activity_material", id_activity_material)
      .input("Id_material", id_material)
      .input("Id_activity", id_activity)
      .query(queries.getAllActivitiesMaterials);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
