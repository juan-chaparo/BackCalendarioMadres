import { getConnection, sql, queries } from "../database";

export const getChildUdsWeigth = async (req, res) => {
  try {
    const {
      id_child_uds_weigth,
      id_child_uds,
      weigth,
      height,
      date_admission,
    } = req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_child_uds_weigth", id_child_uds_weigth)
      .input("Id_child_uds", id_child_uds)
      .input("Weigth", weigth)
      .input("Height", height)
      .input("Date_admission", date_admission)
      .query(queries.getAllChildUdsWeigth);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const createChildUdsWeigth = async (req, res) => {
  const { id_child_uds, weigth, height } = req.body;
  if (id_child_uds == null || weigth == null || height == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Id_child_uds", sql.Int, id_child_uds)
      .input("Weigth", sql.Float, weigth)
      .input("Height", sql.Float, height)
      .query(queries.createChildUdsWeigth);
    res.json("Registrado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const updateChildUdsWeigth = async (req, res) => {
  const { id_child_uds, weigth, height } = req.body;
  const { id_child_uds_weigth } = req.query;
  if (id_child_uds_weigth == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Id_child_uds", sql.Int, id_child_uds)
      .input("Weigth", sql.Float, weigth)
      .input("Height", sql.Float, height)
      .input("Id_child_uds_weigth", sql.Int, id_child_uds_weigth)
      .query(queries.updateChildUdsWeigth);
    res.json("Actualizado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
