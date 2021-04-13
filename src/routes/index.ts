import express from "express";

export function register( app: express.Application ) {
  app.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
  })
};
