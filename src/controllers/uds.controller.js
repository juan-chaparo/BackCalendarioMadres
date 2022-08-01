import { getConnection, sql, queries } from "../database";

export const getUds = async (req, res) => {
  try {
    const {
      id_uds,
      name_uds,
      NIT,
      number_contract,
      code,
      cellphone,
      address,
      id_municipality,
      id_servicie_type,
      id_servicie_modality,
      date_admission,
      state,
      id_zonal_center,
    } = req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_uds", id_uds)
      .input("Name_uds", name_uds)
      .input("NIT", NIT)
      .input("Number_contract", number_contract)
      .input("Code", code)
      .input("Cellphone", cellphone)
      .input("Address", address)
      .input("Id_municipality", id_municipality)
      .input("Id_servicie_type", id_servicie_type)
      .input("Id_servicie_modality", id_servicie_modality)
      .input("Date_admission", date_admission)
      .input("State", state)
      .input("Id_zonal_center", id_zonal_center)
      .query(queries.getAllUds);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
