import { getConnection, sql, queries } from "../database";

export const getUsers = async (req, res) => {
  try {
    const { id_user, email, password, id_rol, state, token } = req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_user", id_user)
      .input("Email", email)
      .input("Password", password)
      .input("Id_rol", id_rol)
      .input("State", state)
      .input("Token", token)
      .query(queries.getAllUsers);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const createUsers = async (req, res) => {
  const { email, password, id_rol, token } = req.body;
  if (email == null || password == null || id_rol == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Email", sql.VarChar, email)
      .input("Password", sql.VarChar, password)
      .input("Id_rol", sql.Int, id_rol)
      .input("Token", sql.VarChar, token)
      .query(queries.createUsers);
    res.json("Registrado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const updateUsers = async (req, res) => {
  const { email, password, id_rol, state, token } = req.body;
  const { id_user } = req.query;
  if (id_user == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fiel" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Email", sql.VarChar, email)
      .input("Password", sql.VarChar, password)
      .input("Id_rol", sql.Int, id_rol)
      .input("State", sql.Int, state)
      .input("Id_user", sql.Int, id_user)
      .input("Token", sql.VarChar, token)
      .query(queries.updateUsers);
    res.json("Actualizado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
