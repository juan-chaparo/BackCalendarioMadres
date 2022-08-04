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
export const createFormRamDay = async (req, res) => {
  const { id_attendance, id_child_uds } = req.body;
  if (id_attendance == null || id_child_uds == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Id_attendance", sql.Int, id_attendance)
      .input("Id_child_uds", sql.Int, id_child_uds)
      .query(queries.createFormRamDay);
    res.json("Registrado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const updateFormRamDay = async (req, res) => {
  const { id_attendance, id_child_uds } = req.body;
  const { id_form_ram_day } = req.query;
  if (id_form_ram_day == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Id_attendance", sql.Int, id_attendance)
      .input("Id_child_uds", sql.Int, id_child_uds)
      .input("Id_form_ram_day", sql.Int, id_form_ram_day)
      .query(queries.updateFormRamDay);
    res.json("Actualizado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
