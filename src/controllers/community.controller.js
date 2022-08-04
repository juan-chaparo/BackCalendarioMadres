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
export const createCommunity = async (req, res) => {
  const { id_schedule, date_admission, state } = req.body;
  if (id_schedule == null || date_admission == null || state == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Id_schedule", sql.Int, id_schedule)
      .input("Date_admission", sql.DateTime, date_admission)
      .input("State", sql.Bit, state)
      .query(queries.createActivitiesContributions);
    res.json("Registrado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const updateCommunity = async (req, res) => {
  const { id_schedule, date_admission, state } = req.body;
  const { id_community } = req.query;
  if (id_community == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Id_schedule", sql.Int, id_schedule)
      .input("Date_admission", sql.Date, date_admission)
      .input("State", sql.Int, state)
      .input("Id_community", sql.Int, id_community)
      .query(queries.updateCommunity);
    res.json("Actualizado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
