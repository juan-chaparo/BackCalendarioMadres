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
