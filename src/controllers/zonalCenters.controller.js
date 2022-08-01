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
