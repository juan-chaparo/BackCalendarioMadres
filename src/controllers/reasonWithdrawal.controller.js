import { getConnection, sql, queries } from "../database";

export const getReasonWithdrawal = async (req, res) => {
  try {
    const {
      id_reason_withdrawal,
      name_reason_withdrawal,
      Abbreviation,
      name_reason_withdrawal_esp,
    } = req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_reason_withdrawal", id_reason_withdrawal)
      .input("Name_reason_withdrawal", name_reason_withdrawal)
      .input("Abbreviation", Abbreviation)
      .input("Name_reason_withdrawal_esp", name_reason_withdrawal_esp)
      .query(queries.getAllReasonWithdrawal);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
