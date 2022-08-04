import { getConnection, sql, queries } from "../database";

export const getZonalCenters = async (req, res) => {
  try {
    const { id_zonal_center, name, state } = req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_zonal_center", id_zonal_center)
      .input("Name", name)
      .input("State", state)
      .query(queries.getAllZonalCenters);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const createZonalCenters = async (req, res) => {
  const { name } = req.body;
  if (name == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Name", sql.VarChar, name)
      .query(queries.createZonalCenters);
    res.json("Registrado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateZonalCenters = async (req, res) => {
  const { name, state } = req.body;
  const { id_zonal_center } = req.query;
  if (id_zonal_center == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Name", sql.VarChar, name)
      .input("State", sql.Int, state)
      .input("Id_zonal_center", sql.Int, id_zonal_center)
      .query(queries.updateChildrenId);
    res.json("Actualizado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
