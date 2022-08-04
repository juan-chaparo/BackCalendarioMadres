import { getConnection, sql, queries } from "../database";

export const getTracingChild = async (req, res) => {
  try {
    const {
      id_tracing_child,
      date_admission,
      id_child_uds,
      id_aspect,
      description,
    } = req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_tracing_child", id_tracing_child)
      .input("Date_admission", date_admission)
      .input("Id_child_uds", id_child_uds)
      .input("Id_aspect", id_aspect)
      .input("Description", description)
      .query(queries.getAllTracingChild);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const createTracingChild = async (req, res) => {
  const { id_child_uds, id_aspect, description } = req.body;
  if (id_child_uds == null || id_aspect == null || description == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Id_child_uds", sql.Int, id_child_uds)
      .input("Id_aspect", sql.Int, id_aspect)
      .input("Description", sql.VarChar, description)
      .query(queries.createTracingChild);
    res.json("Registrado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const updateTracingChild = async (req, res) => {
  const { id_child_uds, id_aspect, description } = req.body;
  const { id_tracing_child } = req.query;
  if (id_tracing_child == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Id_child_uds", sql.Int, id_child_uds)
      .input("Id_aspect", sql.Int, id_aspect)
      .input("Description", sql.VarChar, description)
      .input("Id_tracing_child", sql.Int, id_tracing_child)
      .query(queries.updateTracingChild);
    res.json("Actualizado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
