import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import routes from "./routes.js";

const app = express();
const port = 8080;

app.set("views", path.join(path.dirname(fileURLToPath(import.meta.url)), "views"));
app.set("view engine", "ejs");

app.get("/", routes.index);
app.get("/health", routes.health);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

app.use(express.json());
