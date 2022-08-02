import { getConnection, sql, queries } from "../database";

export const getActivities = async (req, res) => {
  try {
    const {
      id_activity,
      name,
      duration,
      description,
      variants,
      img,
      video,
      adaptation_small_space,
      state,
      id_lenguage,
    } = req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id", id_activity)
      .input("Name", name)
      .input("Duration", duration)
      .input("Description", description)
      .input("Variants", variants)
      .input("Img", img)
      .input("Video", video)
      .input("Adaptation_small_space", adaptation_small_space)
      .input("State", state)
      .input("Id_lenguage", id_lenguage)
      .query(queries.getAllActivities);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const createActivities = async (req, res) => {
  const {
    name,
    duration,
    description,
    variants,
    img,
    video,
    adaptation_small_space,
    state,
    id_lenguage,
  } = req.body;
  if (name == null || duration == null || state == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Name", sql.VarChar, f)
      .input("Duration", sql.VarChar, f)
      .input("Description", sql.VarChar, f)
      .input("", sql.VarChar, f)
      .input("", sql.VarChar, f)
      .input("", sql.VarChar, f)
      .input("", sql.VarChar, f)
      .input("", sql.VarChar, f)
      .input("", sql.VarChar, f)
      .input("", sql.VarChar, f)
      .query(queries.createAllActivities);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
