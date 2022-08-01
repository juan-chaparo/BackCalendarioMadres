import { getConnection, sql, queries } from "../database";

export const getServiciesTypes = async (req, res) => {
  try {
    const { id_servicie_type, name_service, name_service_esp } = req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_servicie_type", id_servicie_type)
      .input("Name_service", name_service)
      .input("Name_service_esp", name_service_esp)
      .query(queries.getAllServiciesTypes);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
