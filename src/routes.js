import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => {
  res.json({
    teste: "okkkk"
  });
});

export default routes;
