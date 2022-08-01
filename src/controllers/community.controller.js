import { getConnection, sql, queries } from "../database";

export const getCommunity = async (req, res) => {
  try {
    const { id_community, id_schedule, date_admission, state } = req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_community", id_community)
      .input("Id_schedule", id_schedule)
      .input("Date_admission", date_admission)
      .input("State", state)
      .query(queries.getAllCommunity);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
