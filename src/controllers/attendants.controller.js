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
