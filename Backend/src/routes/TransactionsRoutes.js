import Router from "express";

const transactionsRoutes = Router();

import { createUserController } from "../modules/users/usecases/CreateUser/index.js";
import { listUsersController } from "../modules/users/usecases/ListUsers/index.js";

// Rota de criação de transações
transactionsRoutes.post("/transactions", (request, response) => {
  return createUserController.handle(request, response);
});

// Rota de listagem de transações
transactionsRoutes.get("/transactions", (request, response) => {
  return listUsersController.handle(request, response);
});

export default transactionsRoutes;