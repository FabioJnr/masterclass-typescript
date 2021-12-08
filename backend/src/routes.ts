import { Router } from "express";
import  UserControler from './controllers/UserControler';

const routes = Router();

routes.get("/", (req, res) => {
  res.send("<h1>Main Page</h1>");
});

routes.get('/users', UserControler.index);

export default routes;
