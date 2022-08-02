import { getConnection, sql, queries } from "../database";

export const getContributions = async (req, res) => {
  try {
    const {
      id_contribution,
      contributions,
      id_type_contribution,
      id_lenguage,
    } = req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_contribution", id_contribution)
      .input("Contributions", contributions)
      .input("Id_type_contribution", id_type_contribution)
      .input("Id_lenguage", id_lenguage)
      .query(queries.getAllContributions);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
