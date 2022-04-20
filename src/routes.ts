import express from "express";

export function index(
  _req: express.Request,
  res: express.Response,
  _next: express.NextFunction,
) {
  res.render("index", { title: "Express" });
}

export function health(
  _req: express.Request,
  res: express.Response,
  _next: express.NextFunction,
) {
  res.sendStatus(200);
}

export default {
  index,
  health,
};
