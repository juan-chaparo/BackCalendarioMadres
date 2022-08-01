import { getConnection, sql, queries } from "../database";

export const getAllAttendances = async (req, res) => {
  try {
    const {
      id_attendance,
      name_attendances,
      Abbreviation,
      name_attendances_esp,
    } = req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_attendance", id_attendance)
      .input("Name_attendances", name_attendances)
      .input("Abbreviation", Abbreviation)
      .input("Name_attendances_esp", name_attendances_esp)
      .query(queries.getAllAttendances);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
