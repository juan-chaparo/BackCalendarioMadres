import app from "./app";
//probandoo
/* prueba2 */
app.listen(app.get("port"));

console.log("server on port", app.get("port"));
console.log(process.env.user);
