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
export const createActivitiesMaterials = async (req, res) => {
  const { id_material, id_activity } = req.body;
  if (id_material == null || id_activity == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Id_material", sql.Int, id_material)
      .input("Id_activity", sql.Int, id_activity)
      .query(queries.createActivitiesMaterials);
    res.json("Registrado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const updateActivitiesMaterials = async (req, res) => {
  const { id_material, id_activity } = req.body;
  const { id_activity_material } = req.query;
  if (id_activity_material == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Id_material", sql.Int, id_material)
      .input("Id_activity", sql.Int, id_activity)
      .input("Id_activity_material", sql.Int, id_activity_material)
      .query(queries.updateActivitiesMaterials);
    res.json("Actualizado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
