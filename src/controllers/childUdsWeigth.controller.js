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
