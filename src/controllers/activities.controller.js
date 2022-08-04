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
    id_lenguage,
  } = req.body;
  if (
    name == null ||
    duration == null ||
    description == null ||
    variants == null ||
    adaptation_small_space == null ||
    id_lenguage == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Name", sql.VarChar, name)
      .input("Duration", sql.Int, duration)
      .input("Description", sql.VarChar, description)
      .input("Variants", sql.VarChar, variants)
      .input("Img", sql.VarChar, img)
      .input("Video", sql.VarChar, video)
      .input("Adaptation_small_space", sql.VarChar, adaptation_small_space)
      .input("Id_lenguage", sql.Int, id_lenguage)
      .query(queries.createActivities);
    res.json("Registrado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const updateActivities = async (req, res) => {
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
  const { id_activity } = req.query;
  if (id_activity == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Name", sql.VarChar, name)
      .input("Duration", sql.Int, duration)
      .input("Description", sql.VarChar, description)
      .input("Variants", sql.VarChar, variants)
      .input("Img", sql.VarChar, img)
      .input("Video", sql.VarChar, video)
      .input("Adaptation_small_space", sql.VarChar, adaptation_small_space)
      .input("State", sql.Int, state)
      .input("Id_lenguage", sql.Int, id_lenguage)
      .input("Id_activity", sql.Int, id_activity)
      .query(queries.updateActivities);
    res.json("Actualizado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
