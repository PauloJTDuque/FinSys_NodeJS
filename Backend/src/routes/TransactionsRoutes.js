import Router from "express";

const usersRouters = Router();

import { createUserController } from "../modules/users/usecases/CreateUser/index.js";
import { listUsersController } from "../modules/users/usecases/ListUsers/index.js";

// Rota de criação de transações
usersRouters.post("/transactions", (request, response) => {
  return createUserController.handle(request, response);
});

// Rota de listagem de transações
usersRouters.get("/users", (request, response) => {
  return listUsersController.handle(request, response);
});

export default usersRouters;