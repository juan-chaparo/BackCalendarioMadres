import { getConnection, sql, queries } from "../database";

export const getDocsTypes = async (req, res) => {
  try {
    const {
      id_doc_type,
      name_doc,
      abbreviation,
      name_doc_esp,
      abbreviation_esp,
    } = req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_doc_type", id_doc_type)
      .input("Name_doc", name_doc)
      .input("Abbreviation", abbreviation)
      .input("Name_doc_esp", name_doc_esp)
      .input("Abbreviation_esp", abbreviation_esp)
      .query(queries.getAllDocsTypes);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
