import express from "express";

export function register(app: express.Application) {
  app.get("/", (_req, res) => {
    res.render("index", { title: "Express" });
  });
}
