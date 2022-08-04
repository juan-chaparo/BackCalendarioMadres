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

export const createAgentsCommunity = async (req, res) => {
  const {
    first_name,
    second_name,
    first_last_name,
    second_last_name,
    cellphone,
    num_doc,
    id_doc_type,
    id_education_level,
    date_birth,
    img,
  } = req.body;
  if (
    first_name == null ||
    first_last_name == null ||
    second_last_name == null ||
    cellphone == null ||
    num_doc == null ||
    id_doc_type == null ||
    id_education_level == null ||
    date_birth == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("First_name", sql.VarChar, first_name)
      .input("Second_name", sql.VarChar, second_name)
      .input("First_last_name", sql.VarChar, first_last_name)
      .input("Second_last_name", sql.VarChar, second_last_name)
      .input("Cellphone", sql.VarChar, cellphone)
      .input("Num_doc", sql.VarChar, num_doc)
      .input("Id_doc_type", sql.Int, id_doc_type)
      .input("Id_education_level", sql.Int, id_education_level)
      .input("Date_birth", sql.Date, date_birth)
      .input("Img", sql.VarChar, img)
      .query(queries.createAgentsCommunity);
    res.json("Registrado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const updateAgentsCommunity = async (req, res) => {
  const {
    first_name,
    second_name,
    first_last_name,
    second_last_name,
    cellphone,
    num_doc,
    id_doc_type,
    id_education_level,
    date_birth,
    state,
    img,
  } = req.body;
  const { id_agent_community } = req.query;
  if (id_agent_community == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("First_name", sql.VarChar, first_name)
      .input("Second_name", sql.VarChar, second_name)
      .input("First_last_name", sql.VarChar, first_last_name)
      .input("Second_last_name", sql.VarChar, second_last_name)
      .input("Cellphone", sql.VarChar, cellphone)
      .input("Num_doc", sql.VarChar, num_doc)
      .input("Id_doc_type", sql.Int, id_doc_type)
      .input("Id_education_level", sql.Int, id_education_level)
      .input("Date_birth", sql.Date, date_birth)
      .input("State", sql.Int, state)
      .input("Img", sql.VarChar, img)
      .input("Id_agent_community", sql.Int, id_agent_community)
      .query(queries.updateAgentsCommunity);
    res.json("Actualizado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
