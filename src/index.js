import app from "./app";
//probandoo
app.listen(app.get("port"));

console.log("server on port", app.get("port"));
console.log(process.env.user);
