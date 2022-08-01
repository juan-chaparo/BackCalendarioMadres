import { getConnection, sql, queries } from "../database";

export const getFormRamDay = async (req, res) => {
  try {
    const { id_form_ram_day, date_admission, id_attendance, id_child_uds } =
      req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_form_ram_day", id_form_ram_day)
      .input("Date_admission", date_admission)
      .input("Id_attendance", id_attendance)
      .input("Id_child_uds", id_child_uds)
      .query(queries.getAllFormRamDay);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
