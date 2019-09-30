import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => {
  res.json({
    teste: "ok"
  });
});

export default routes;
