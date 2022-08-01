import { getConnection, sql, queries } from "../database";

export const getMaterials = async (req, res) => {
  try {
    const { id_material, material, material_esp } = req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_material", id_material)
      .input("Material", material)
      .input("Material_esp", material_esp)
      .query(queries.getAllMaterials);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
