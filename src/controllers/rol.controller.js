import { getConnection, sql, queries } from "../database";

export const getRol = async (req, res) => {
  try {
    const { id_rol, rol, id_lenguage } = req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_rol", id_rol)
      .input("Rol", rol)
      .input("Id_lenguage", id_lenguage)
      .query(queries.getAllRol);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
