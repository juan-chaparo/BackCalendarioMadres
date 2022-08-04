import { getConnection, sql, queries } from "../database";

export const getChildAttendants = async (req, res) => {
  try {
    const {
      id_child_attendants,
      id_child,
      id_attendants,
      date_admission,
      id_relationship,
    } = req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_child_attendants", id_child_attendants)
      .input("Id_child", id_child)
      .input("Id_attendants", id_attendants)
      .input("Date_admission", date_admission)
      .input("Id_relationship", id_relationship)
      .query(queries.getAllChildAttendants);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const createChildAttendants = async (req, res) => {
  const { id_child, id_attendants, id_relationship } = req.body;
  if (id_child == null || id_attendants == null || id_relationship == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Id_child", sql.Int, id_child)
      .input("Id_attendants", sql.Int, id_attendants)
      .input("Id_relationship", sql.Int, id_relationship)
      .query(queries.createChildAttendants);
    res.json("Registrado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const updateChildAttendants = async (req, res) => {
  const { id_child, id_attendants, id_relationship } = req.body;
  const { id_child_attendants } = req.query;
  if (id_child_attendants == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Id_child", sql.VarChar, id_child)
      .input("Id_attendants", sql.VarChar, id_attendants)
      .input("Id_relationship", sql.VarChar, id_relationship)
      .input("Id_child_attendants", sql.Int, id_child_attendants)
      .query(queries.updateChildAttendants);
    res.json("Actualizado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
