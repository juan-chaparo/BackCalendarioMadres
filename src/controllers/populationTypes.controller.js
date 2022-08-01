import { getConnection, sql, queries } from "../database";

export const getPopulationTypes = async (req, res) => {
  try {
    const {
      id_population_type,
      name_population_type,
      name_population_type_esp,
    } = req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_population_type", id_population_type)
      .input("Name_population_type", name_population_type)
      .input("Name_population_type_esp", name_population_type_esp)
      .query(queries.getAllPopulationTypes);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
