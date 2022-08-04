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
export const createUds = async (req, res) => {
  const {
    name_uds,
    NIT,
    number_contract,
    code,
    cellphone,
    address,
    id_municipality,
    id_servicie_type,
    id_servicie_modality,
    id_zonal_center,
  } = req.body;
  if (
    name_uds == null ||
    NIT == null ||
    number_contract == null ||
    code == null ||
    cellphone == null ||
    address == null ||
    id_municipality == null ||
    id_servicie_type == null ||
    id_servicie_modality == null ||
    id_zonal_center == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Name_uds", sql.VarChar, name_uds)
      .input("NIT", sql.VarChar, NIT)
      .input("Number_contract", sql.VarChar, number_contract)
      .input("Code", sql.VarChar, code)
      .input("Cellphone", sql.VarChar, cellphone)
      .input("Address", sql.VarChar, address)
      .input("Id_municipality", sql.Int, id_municipality)
      .input("Id_servicie_type", sql.Int, id_servicie_type)
      .input("Id_servicie_modality", sql.Int, id_servicie_modality)
      .input("Id_zonal_center", sql.Int, id_zonal_center)
      .query(queries.createUds);
    res.json("Registrado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const updateUds = async (req, res) => {
  const {
    name_uds,
    NIT,
    number_contract,
    code,
    cellphone,
    address,
    id_municipality,
    id_servicie_type,
    id_servicie_modality,
    state,
    id_zonal_center,
  } = req.body;
  const { id_uds } = req.query;
  if (id_uds == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Name_uds", sql.Int, name_uds)
      .input("NIT", sql.VarChar, NIT)
      .input("Number_contract", sql.VarChar, number_contract)
      .input("Code", sql.VarChar, code)
      .input("Cellphone", sql.VarChar, cellphone)
      .input("Address", sql.VarChar, address)
      .input("Id_municipality", sql.Int, id_municipality)
      .input("Id_servicie_type", sql.Int, id_servicie_type)
      .input("Id_servicie_modality", sql.Int, id_servicie_modality)
      .input("State", sql.Int, state)
      .input("Id_zonal_center", sql.Int, id_zonal_center)
      .input("Id_uds", sql.Int, id_uds)
      .query(queries.updateUds);
    res.json("Actualizado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
