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
