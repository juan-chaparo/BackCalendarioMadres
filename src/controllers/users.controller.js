import { getConnection, sql, queries } from "../database";

export const getUsers = async (req, res) => {
  try {
    const { id_user, email, password, id_rol, state } = req.query;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_user", id_user)
      .input("Email", email)
      .input("Password", password)
      .input("Id_rol", id_rol)
      .input("State", state)
      .query(queries.getAllUsers);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
