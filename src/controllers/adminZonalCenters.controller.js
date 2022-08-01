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
