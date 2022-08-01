import { getConnection, sql, queries } from "../database";

export const getDiary = async (req, res) => {
  try {
    const { id_diary, id_schedule, date_diary } = req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_diary", id_diary)
      .input("Id_schedule", id_schedule)
      .input("Date_diary", date_diary)
      .query(queries.getAllDiary);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
