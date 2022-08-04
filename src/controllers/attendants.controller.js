import { getConnection, sql, queries } from "../database";

export const getattendants = async (req, res) => {
  try {
    const {
      id_attendant,
      first_name,
      second_name,
      first_last_name,
      second_last_name,
      occupation,
      date_birth,
      id_education_level,
      date_start,
      date_end,
      address,
      cellphone,
      live_child,
      occasionally,
      num_doc,
      id_doc_type,
      id_gender,
      date_admission,
      state,
    } = req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_attendant", id_attendant)
      .input("First_name", first_name)
      .input("Second_name", second_name)
      .input("First_last_name", first_last_name)
      .input("Second_last_name", second_last_name)
      .input("Occupation", occupation)
      .input("Date_birth", date_birth)
      .input("Id_education_level", id_education_level)
      .input("Date_start", date_start)
      .input("Date_end", date_end)
      .input("Address", address)
      .input("Cellphone", cellphone)
      .input("Live_child", live_child)
      .input("Occasionally", occasionally)
      .input("Num_doc", num_doc)
      .input("Id_doc_type", id_doc_type)
      .input("Id_gender", id_gender)
      .input("Date_admission", date_admission)
      .input("State", state)
      .query(queries.getAllAttendants);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const createAttendants = async (req, res) => {
  const {
    first_name,
    second_name,
    first_last_name,
    second_last_name,
    occupation,
    date_birth,
    id_education_level,
    date_start,
    date_end,
    address,
    cellphone,
    live_child,
    occasionally,
    num_doc,
    id_doc_type,
    id_gender,
  } = req.body;
  if (
    first_name == null ||
    first_last_name == null ||
    second_last_name == null ||
    date_birth == null ||
    id_education_level == null ||
    date_start == null ||
    date_end == null ||
    address == null ||
    cellphone == null ||
    live_child == null ||
    occasionally == null ||
    num_doc == null ||
    id_doc_type == null ||
    id_gender == null
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
      .input("Occupation", sql.VarChar, occupation)
      .input("Date_birth", sql.Date, date_birth)
      .input("Id_education_level", sql.Int, id_education_level)
      .input("Date_start", sql.VarChar, date_start)
      .input("Date_end", sql.VarChar, date_end)
      .input("Address", sql.VarChar, address)
      .input("Cellphone", sql.VarChar, cellphone)
      .input("Live_child", sql.Bit, live_child)
      .input("Occasionally", sql.Bit, occasionally)
      .input("Num_doc", sql.VarChar, num_doc)
      .input("Id_doc_type", sql.Int, id_doc_type)
      .input("Id_gender", sql.Int, id_gender)
      .query(queries.createAttendants);
    res.json("Registrado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const updateAttendants = async (req, res) => {
  const {
    first_name,
    second_name,
    first_last_name,
    second_last_name,
    occupation,
    date_birth,
    id_education_level,
    date_start,
    date_end,
    address,
    cellphone,
    live_child,
    occasionally,
    num_doc,
    id_doc_type,
    id_gender,
    state,
  } = req.body;
  const { id_attendant } = req.query;
  if (id_attendant == null) {
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
      .input("Occupation", sql.VarChar, occupation)
      .input("Date_birth", sql.Date, date_birth)
      .input("Id_education_level", sql.Int, id_education_level)
      .input("Date_start", sql.VarChar, date_start)
      .input("Date_end", sql.VarChar, date_end)
      .input("Address", sql.VarChar, address)
      .input("Cellphone", sql.VarChar, cellphone)
      .input("Live_child", sql.Int, live_child)
      .input("Occasionally", sql.Int, occasionally)
      .input("Num_doc", sql.VarChar, num_doc)
      .input("Id_doc_type", sql.Int, id_doc_type)
      .input("Id_gender", sql.Int, id_gender)
      .input("State", sql.Int, state)
      .input("Id_attendant", sql.Int, id_attendant)
      .query(queries.updateAttendants);
    res.json("Actualizado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
