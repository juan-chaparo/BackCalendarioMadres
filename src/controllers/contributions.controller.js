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

export const createContributions = async (req, res) => {
  const { contributions, id_type_contribution, id_lenguage } = req.body;
  if (
    contributions == null ||
    id_type_contribution == null ||
    id_lenguage == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Contributions", sql.VarChar, contributions)
      .input("Id_type_contribution", sql.Int, id_type_contribution)
      .input("Id_lenguage", sql.Int, id_lenguage)
      .query(queries.createContributions);
    res.json("Registrado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const updateContributions = async (req, res) => {
  const { contributions, id_type_contribution, id_lenguage } = req.body;
  const { id_contribution } = req.query;
  if (id_contribution == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Contributions", sql.VarChar, contributions)
      .input("Id_type_contribution", sql.Int, id_type_contribution)
      .input("Id_lenguage", sql.Int, id_lenguage)
      .input("Id_contribution", sql.Int, id_contribution)
      .query(queries.updateContributions);
    res.json("Actualizado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
