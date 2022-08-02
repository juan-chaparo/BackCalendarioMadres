import { getConnection, sql, queries } from "../database";

export const getTypesContribution = async (req, res) => {
  try {
    const { id_type_contribution, type_contribution, id_lenguage } = req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_type_contribution", id_type_contribution)
      .input("Type_contribution", type_contribution)
      .input("Id_lenguage", id_lenguage)
      .query(queries.getAllTypesContribution);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
