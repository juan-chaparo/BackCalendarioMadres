import { getConnection, sql, queries } from "../database";

export const getEducationLevels = async (req, res) => {
  try {
    const {
      id_education_level,
      name_education_level,
      name_education_level_esp,
    } = req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_education_level", id_education_level)
      .input("Name_education_level", name_education_level)
      .input("Name_education_level_esp", name_education_level_esp)
      .query(queries.getAllEducationLevels);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
