import { getConnection, sql, queries } from "../database";

export const getActivityChild = async (req, res) => {
  try {
    const {
      id_activity_child,
      id_schedule_activity,
      id_child_uds,
      description,
      date_admission,
      updt,
      assistance,
      state,
    } = req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_activity_child", id_activity_child)
      .input("Id_schedule_activity", id_schedule_activity)
      .input("Id_child_uds", id_child_uds)
      .input("Description", description)
      .input("Date_admission", date_admission)
      .input("Updt", updt)
      .input("Assistance", assistance)
      .input("State", state)
      .query(queries.getAllActivityChild);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
