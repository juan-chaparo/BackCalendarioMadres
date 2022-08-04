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
export const createShedules = async (req, res) => {
  const { name, id_agent_uds, start_shuedule } = req.body;
  if (name == null || id_agent_uds == null || start_shuedule == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Name", sql.VarChar, name)
      .input("Id_agent_uds", sql.Int, id_agent_uds)
      .input("Start_shuedule", sql.VarChar, start_shuedule)
      .query(queries.createShedules);
    res.json("Registrado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const updateShedules = async (req, res) => {
  const { name, id_agent_uds, start_shuedule } = req.body;
  const { id_schedule } = req.query;
  if (id_schedule == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Name", sql.VarChar, name)
      .input("Id_agent_uds", sql.Int, id_agent_uds)
      .input("Start_shuedule", sql.VarChar, start_shuedule)
      .input("Id_schedule", sql.Int, id_schedule)
      .query(queries.updateShedules);
    res.json("Actualizado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
