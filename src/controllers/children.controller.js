import { getConnection, sql, queries } from "../database";

export const createNewChildren = async (req, res) => {
  const {
    first_name,
    second_name,
    first_last_name,
    second_last_name,
    date_birth,
    num_docs,
    id_type_docs,
    id_uds,
    id_type_population,
    id_gender,
  } = req.body;
  if (
    first_name == null ||
    first_last_name == null ||
    second_last_name == null ||
    date_birth == null ||
    num_docs == null ||
    id_type_docs == null ||
    id_uds == null ||
    id_type_population == null ||
    id_gender == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("first_nameB", sql.VarChar, first_name)
      .input("second_nameB", sql.VarChar, second_name)
      .input("first_last_nameB", sql.VarChar, first_last_name)
      .input("second_last_nameB", sql.VarChar, second_last_name)
      .input("date_birthB", sql.Date, date_birth)
      .input("num_docsB", sql.VarChar, num_docs)
      .input("id_type_docsB", sql.Int, id_type_docs)
      .input("id_udsB", sql.Int, id_uds)
      .input("id_type_populationB", sql.Int, id_type_population)
      .input("id_genderB", sql.Int, id_gender)
      .query(queries.createNewChildren);
    res.json(num_docs);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getChildrenById = async (req, res) => {
  const {
    id_child,
    first_name,
    second_name,
    first_last_name,
    second_last_name,
    date_birth,
    num_docs,
    date_admission,
    state,
    id_type_docs,
    id_uds,
    id_type_population,
    id_gender,
  } = req.query;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("Id", id_child)
    .input("first_nameB", sql.VarChar, first_name)
    .input("second_nameB", sql.VarChar, second_name)
    .input("first_last_nameB", sql.VarChar, first_last_name)
    .input("second_last_nameB", sql.VarChar, second_last_name)
    .input("date_birthB", sql.Date, date_birth)
    .input("Date_admission", sql.DateTime, date_admission)
    .input("num_docsB", sql.VarChar, num_docs)
    .input("id_type_docsB", sql.Int, id_type_docs)
    .input("id_udsB", sql.Int, id_uds)
    .input("id_type_populationB", sql.Int, id_type_population)
    .input("stateB", sql.Bit, state)
    .input("id_genderB", sql.Int, id_gender)
    .query(queries.getChildrenId);
  res.send(result.recordset);
};

export const updateChildrenId = async (req, res) => {
  const {
    first_name,
    second_name,
    first_last_name,
    second_last_name,
    date_birth,
    num_docs,
    state,
    id_type_docs,
    id_uds,
    id_type_population,
    id_gender,
  } = req.body;
  const { id_child } = req.query;
  if (id_child == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("first_nameB", sql.VarChar, first_name)
      .input("second_nameB", sql.VarChar, second_name)
      .input("first_last_nameB", sql.VarChar, first_last_name)
      .input("second_last_nameB", sql.VarChar, second_last_name)
      .input("date_birthB", sql.Date, date_birth)
      .input("num_docsB", sql.VarChar, num_docs)
      .input("id_type_docsB", sql.Int, id_type_docs)
      .input("id_udsB", sql.Int, id_uds)
      .input("id_type_populationB", sql.Int, id_type_population)
      .input("stateB", sql.Int, state)
      .input("id_genderB", sql.Int, id_gender)
      .input("Id_child", sql.Int, id_child)
      .query(queries.updateChildrenId);
    res.json({ id, first_name });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
