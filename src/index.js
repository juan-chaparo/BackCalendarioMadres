import app from "./app";
//probandoo
/* prueba3 */
app.listen(app.get("port"));

console.log("server on port", app.get("port"));
console.log(process.env.user);
