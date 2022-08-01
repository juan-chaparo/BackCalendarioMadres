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
      description_esp,
      variants_esp,
      adaptation_small_space_esp,
      name_esp,
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
      .input("Description_esp", description_esp)
      .input("Variants_esp", variants_esp)
      .input("Adaptation_small_space_esp", adaptation_small_space_esp)
      .input("Name_esp", name_esp)
      .query(queries.getAllActivities);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
