import express from "express";

export function hello(
  _req: express.Request,
  res: express.Response,
  _next: express.NextFunction,
) {
  res.status(200).send("hello world!");
}

export default {
  hello,
};
