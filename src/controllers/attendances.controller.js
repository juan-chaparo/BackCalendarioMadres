import { getConnection, sql, queries } from "../database";

export const getAllAttendances = async (req, res) => {
  try {
    const { id_attendance, name_attendances, Abbreviation, id_lenguage } =
      req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_attendance", id_attendance)
      .input("Name_attendances", name_attendances)
      .input("Abbreviation", Abbreviation)
      .input("Id_lenguage", id_lenguage)
      .query(queries.getAllAttendances);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
