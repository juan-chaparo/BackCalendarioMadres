import { getConnection, sql, queries } from "../database";

export const getWithdrawal = async (req, res) => {
  try {
    const { id_withdrawal, id_child, date_admission, id_reason } = req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_withdrawal", id_withdrawal)
      .input("Id_child", id_child)
      .input("Date_admission", date_admission)
      .input("Id_reason", id_reason)
      .query(queries.getAllWithdrawal);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const createWithdrawal = async (req, res) => {
  const { id_child, id_reason } = req.body;
  if (id_child == null || id_reason == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Id_child", sql.Int, id_child)
      .input("Id_reason", sql.Int, id_reason)
      .query(queries.createWithdrawal);
    res.json("Registrado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const updateWithdrawal = async (req, res) => {
  const { id_child, id_reason } = req.body;
  const { id_withdrawal } = req.query;
  if (id_withdrawal == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Id_child", sql.Int, id_child)
      .input("Id_reason", sql.Int, id_reason)
      .input("Id_withdrawal", sql.Int, id_withdrawal)
      .query(queries.updateWithdrawal);
    res.json("Actualizado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
