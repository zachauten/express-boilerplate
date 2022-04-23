import { createTerminus } from "@godaddy/terminus";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import routes from "./routes.js";

const app = express();
const port = 8080;

app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));

app.use(
  "/",
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), "public"),
  ),
);

app.get("/api/hello", routes.hello);

const server = app.listen({
  hostname: "0.0.0.0",
  port,
}, () => {
  console.log(`server started at http://localhost:${port}`);
});

createTerminus(server, {
  signals: ["SIGTERM", "SIGINT"],
  healthChecks: { "/api/health": async () => {} },
  onSignal: () => {
    console.log("starting shutdown...");
    return Promise.resolve();
  },
  onShutdown: () => {
    console.log("shutdown done");
    return Promise.resolve();
  },
});
