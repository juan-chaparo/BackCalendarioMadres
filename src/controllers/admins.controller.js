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
