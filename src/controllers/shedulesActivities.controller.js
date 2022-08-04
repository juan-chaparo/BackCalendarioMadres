import { getConnection, sql, queries } from "../database";

export const getShedulesActivities = async (req, res) => {
  try {
    const { id_schedule_activity, id_activity, id_schedule } = req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_schedule_activity", id_schedule_activity)
      .input("Id_activity", id_activity)
      .input("Id_schedule", id_schedule)
      .query(queries.getAllShedulesActivities);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const createShedulesActivities = async (req, res) => {
  const { id_activity, id_schedule } = req.body;
  if (id_activity == null || id_schedule == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Id_activity", sql.Int, id_activity)
      .input("Id_schedule", sql.Int, id_schedule)
      .query(queries.createShedulesActivities);
    res.json("Registrado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const updateShedulesActivities = async (req, res) => {
  const { id_activity, id_schedule } = req.body;
  const { id_schedule_activity } = req.query;
  if (id_schedule_activity == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Id_activity", sql.Int, id_activity)
      .input("Id_schedule", sql.Int, id_schedule)
      .input("Id_schedule_activity", sql.Int, id_schedule_activity)
      .query(queries.updateShedulesActivities);
    res.json("Actualizado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
