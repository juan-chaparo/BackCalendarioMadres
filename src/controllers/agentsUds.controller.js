import { getConnection, sql, queries } from "../database";

export const getAgentsUds = async (req, res) => {
  try {
    const {
      id_agent_uds,
      id_agent_community,
      id_uds,
      date_admission,
      id_user,
    } = req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_agent_uds", id_agent_uds)
      .input("Id_agent_community", id_agent_community)
      .input("Id_uds", id_uds)
      .input("Date_admission", date_admission)
      .input("Id_user", id_user)
      .query(queries.getAllAgentsUds);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const createAgentsUds = async (req, res) => {
  const { id_agent_community, id_uds, id_user } = req.body;
  if (id_agent_community == null || id_uds == null || id_user == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Id_agent_community", sql.Int, id_agent_community)
      .input("Id_uds", sql.Int, id_uds)
      .input("Id_user", sql.Int, id_user)
      .query(queries.createAgentsUds);
    res.json("Registrado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const updateAgentsUds = async (req, res) => {
  const { id_agent_community, id_uds, id_user } = req.body;
  const { id_agent_uds } = req.query;
  if (id_agent_uds == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Id_agent_community", sql.Int, id_agent_community)
      .input("Id_uds", sql.Int, id_uds)
      .input("Id_user", sql.Int, id_user)
      .input("Id_agent_uds", sql.Int, id_agent_uds)
      .query(queries.updateAgentsUds);
    res.json("Actualizado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
