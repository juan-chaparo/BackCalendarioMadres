import { getConnection, sql, queries } from "../database";

export const getAdminZonalCenters = async (req, res) => {
  try {
    const { id_admin_zonal_center, id_admin, id_zonal_center, date_admission } =
      req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_admin_zonal_center", id_admin_zonal_center)
      .input("Id_admin", id_admin)
      .input("Id_zonal_center", id_zonal_center)
      .input("Date_admission", date_admission)
      .query(queries.getAllAdminZonalCenters);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const createAdminZonalCenters = async (req, res) => {
  const { id_admin, id_zonal_center } = req.body;
  if (id_admin == null || id_zonal_center == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Id_admin", sql.Int, id_admin)
      .input("Id_zonal_center", sql.Int, id_zonal_center)
      .query(queries.createAdminZonalCenters);
    res.json("Registrado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const updateAdminZonalCenters = async (req, res) => {
  const { id_admin, id_zonal_center } = req.body;
  const { id_admin_zonal_center } = req.query;
  if (id_admin_zonal_center == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Id_admin", sql.Int, id_admin)
      .input("Id_zonal_center", sql.Int, id_zonal_center)
      .input("Id_admin_zonal_center", sql.Int, id_admin_zonal_center)
      .query(queries.updateAdminZonalCenters);
    res.json("Actualizado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
