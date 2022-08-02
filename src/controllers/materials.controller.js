import { getConnection, sql, queries } from "../database";

export const getMaterials = async (req, res) => {
  try {
    const { id_material, material, id_lenguage } = req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_material", id_material)
      .input("Material", material)
      .input("Id_lenguage", id_lenguage)
      .query(queries.getAllMaterials);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
