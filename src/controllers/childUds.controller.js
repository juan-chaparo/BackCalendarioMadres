import { getConnection, sql, queries } from "../database";

export const getChildUds = async (req, res) => {
  try {
    const { id_child_uds, id_child, id_agent_uds, date_admission, state } =
      req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_child_uds", id_child_uds)
      .input("Id_child", id_child)
      .input("Id_agent_uds", id_agent_uds)
      .input("Date_admission", date_admission)
      .input("State", state)
      .query(queries.getAllChildUds);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
