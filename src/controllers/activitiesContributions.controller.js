import { getConnection, sql, queries } from "../database";

export const getActivitiesContributions = async (req, res) => {
  try {
    const { id_activity_contribution, id_activity, id_contribution } =
      req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_activity_contribution", id_activity_contribution)
      .input("Id_activity", id_activity)
      .input("Id_contribution", id_contribution)
      .query(queries.getAllActivitiesContributions);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
