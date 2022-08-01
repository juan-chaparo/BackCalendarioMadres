import { getConnection, sql, queries } from "../database";

export const getDepartments = async (req, res) => {
  try {
    const { id_department, name_departament } = req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_department", id_department)
      .input("Name_departament", name_departament)
      .query(queries.getAllDepartments);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
