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
export const createChildUds = async (req, res) => {
  const { id_child, id_agent_uds } = req.body;
  if (id_child == null || id_agent_uds == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Id_child", sql.Int, id_child)
      .input("Id_agent_uds", sql.Int, id_agent_uds)
      .query(queries.createChildUds);
    res.json("Registrado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const updateChildUds = async (req, res) => {
  const { id_child, id_agent_uds, state } = req.body;
  const { id_child_uds } = req.query;
  if (id_child_uds == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Id_child", sql.Int, id_child)
      .input("Id_agent_uds", sql.Int, id_agent_uds)
      .input("State", sql.Int, state)
      .input("Id_child_uds", sql.Int, id_child_uds)
      .query(queries.updateChildUds);
    res.json("Actualizado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
