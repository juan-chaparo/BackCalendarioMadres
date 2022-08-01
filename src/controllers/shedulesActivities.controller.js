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
