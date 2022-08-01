import { getConnection, sql, queries } from "../database";

export const getShedules = async (req, res) => {
  try {
    const { id_schedule, name, date_admission, id_agent_uds, start_shuedule } =
      req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_schedule", id_schedule)
      .input("Name", name)
      .input("Date_admission", date_admission)
      .input("Id_agent_uds", id_agent_uds)
      .input("Start_shuedule", start_shuedule)
      .query(queries.getAllShedules);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
