import express from "express";

export function health(
  _req: express.Request,
  res: express.Response,
  _next: express.NextFunction,
) {
  res.sendStatus(200);
}

export default {
  health,
};
