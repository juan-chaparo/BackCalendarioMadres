import { getConnection, sql, queries } from "../database";

export const getAgentsCommunity = async (req, res) => {
  try {
    const {
      id_agent_community,
      first_name,
      second_name,
      first_last_name,
      second_last_name,
      cellphone,
      num_doc,
      id_doc_type,
      date_admission,
      id_education_level,
      date_birth,
      state,
      img,
    } = req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_agent_community", id_agent_community)
      .input("First_name", first_name)
      .input("Second_name", second_name)
      .input("First_last_name", first_last_name)
      .input("Second_last_name", second_last_name)
      .input("Cellphone", cellphone)
      .input("Num_doc", num_doc)
      .input("Id_doc_type", id_doc_type)
      .input("Date_admission", date_admission)
      .input("Id_education_level", id_education_level)
      .input("Date_birth", date_birth)
      .input("State", state)
      .input("Img", img)
      .query(queries.getAllAgentsCommunity);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
