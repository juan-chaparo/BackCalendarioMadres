import { getConnection, sql, queries } from "../database";

export const getTypesContribution = async (req, res) => {
  try {
    const { id_type_contribution, type_contribution, type_contribution_esp } =
      req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_type_contribution", id_type_contribution)
      .input("Type_contribution", type_contribution)
      .input("Type_contribution_esp", type_contribution_esp)
      .query(queries.getAllTypesContribution);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
