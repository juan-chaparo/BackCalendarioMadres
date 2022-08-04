import { getConnection, sql, queries } from "../database";

export const getAdmins = async (req, res) => {
  try {
    const {
      id_admin,
      first_name,
      second_name,
      first_last_name,
      second_last_name,
      num_doc,
      id_doc_type,
      cellphone,
      date_birth,
      date_admission,
      id_user,
    } = req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_admin", id_admin)
      .input("First_name", first_name)
      .input("Second_name", second_name)
      .input("First_last_name", first_last_name)
      .input("Second_last_name", second_last_name)
      .input("Num_doc", num_doc)
      .input("Id_doc_type", id_doc_type)
      .input("Cellphone", cellphone)
      .input("Date_birth", date_birth)
      .input("Date_admission", date_admission)
      .input("Id_user", id_user)
      .query(queries.getAllAdmins);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createAdmins = async (req, res) => {
  const {
    first_name,
    second_name,
    first_last_name,
    second_last_name,
    num_doc,
    id_doc_type,
    cellphone,
    date_birth,
    id_user,
  } = req.body;
  if (
    first_name == null ||
    first_last_name == null ||
    second_last_name == null ||
    num_doc == null ||
    id_doc_type == null ||
    cellphone == null ||
    date_birth == null ||
    id_user == null
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
      .input("Num_doc", sql.VarChar, num_doc)
      .input("Id_doc_type", sql.Int, id_doc_type)
      .input("Cellphone", sql.VarChar, cellphone)
      .input("Date_birth", sql.Date, date_birth)
      .input("Id_user", sql.Int, id_user)
      .query(queries.createAdmins);
    res.json("Registrado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const updateAdmins = async (req, res) => {
  const {
    first_name,
    second_name,
    first_last_name,
    second_last_name,
    num_doc,
    id_doc_type,
    cellphone,
    date_birth,
    id_user,
  } = req.body;
  const { id_admin } = req.query;
  if (id_admin == null) {
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
      .input("Num_doc", sql.VarChar, num_doc)
      .input("Id_doc_type", sql.Int, id_doc_type)
      .input("Cellphone", sql.VarChar, cellphone)
      .input("Date_birth", sql.Date, date_birth)
      .input("Id_user", sql.Int, id_user)
      .input("Id_admin", sql.Int, id_admin)
      .query(queries.updateAdmins);
    res.json("Actualizado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
