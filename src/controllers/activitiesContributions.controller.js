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

export const createActivitiesContributions = async (req, res) => {
  const { id_activity, id_contribution } = req.body;
  if (id_activity == null || id_contribution == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Id_activity", sql.Int, id_activity)
      .input("Id_contribution", sql.Int, id_contribution)
      .query(queries.createActivitiesContributions);
    res.json("Registrado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateActivitiesContributions = async (req, res) => {
  const { id_activity, id_contribution } = req.body;
  const { id_activity_contribution } = req.query;
  if (id_activity_contribution == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Id_activity", sql.Int, id_activity)
      .input("Id_contribution", sql.Int, id_contribution)
      .input("Id_activity_contribution", sql.Int, id_activity_contribution)
      .query(queries.updateActivitiesContributions);
    res.json("Actualizado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
