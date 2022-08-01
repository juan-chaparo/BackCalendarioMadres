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
