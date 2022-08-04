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
export const createDiary = async (req, res) => {
  const { id_schedule, date_diary } = req.body;
  if (id_schedule == null || date_diary == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Id_schedule", sql.Int, id_schedule)
      .input("Date_diary", sql.Date, date_diary)
      .query(queries.createDiary);
    res.json("Registrado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const updateDiary = async (req, res) => {
  const { id_schedule, date_diary } = req.body;
  const { id_diary } = req.query;
  if (id_diary == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Id_schedule", sql.Int, id_schedule)
      .input("Date_diary", sql.Date, date_diary)
      .input("Id_diary", sql.Int, id_diary)
      .query(queries.updateDiary);
    res.json("Actualizado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
