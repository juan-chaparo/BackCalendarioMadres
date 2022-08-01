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
