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
export const createActivityChild = async (req, res) => {
  const { id_schedule_activity, id_child_uds, description, updt, assistance } =
    req.body;
  if (
    id_schedule_activity == null ||
    id_child_uds == null ||
    description == null ||
    updt == null ||
    assistance == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Id_schedule_activity", sql.Int, id_schedule_activity)
      .input("Id_child_uds", sql.Int, id_child_uds)
      .input("Description", sql.VarChar, description)
      .input("Updt", sql.Bit, updt)
      .input("Assistance", sql.Bit, assistance)
      .query(queries.createActivityChild);
    res.json("Registrado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const updateActivityChild = async (req, res) => {
  const {
    id_schedule_activity,
    id_child_uds,
    description,
    updt,
    assistance,
    state,
  } = req.body;
  const { id_activity_child } = req.query;
  if (id_activity_child == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Id_schedule_activity", sql.Int, id_schedule_activity)
      .input("Id_child_uds", sql.Int, id_child_uds)
      .input("Description", sql.VarChar, description)
      .input("Updt", sql.Int, updt)
      .input("Assistance", sql.Int, assistance)
      .input("State", sql.Int, state)
      .input("Id_activity_child", sql.Int, id_activity_child)
      .query(queries.updateActivityChild);
    res.json("Actualizado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
