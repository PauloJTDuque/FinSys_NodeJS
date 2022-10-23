import { CreateTransactionUseCase } from "./CreateTransactionUseCase.js";

export class CreateTransactionController {
  constructor() {
    this.createTransactionUseCase = new CreateTransactionUseCase();
  }

  handle(request, response) {
    const { titulo, valor, tipo, categoria } = request.body;

    const transaction = this.createTransactionUseCase.execute({
      titulo,
      valor,
      tipo,
      categoria,
    });

    response.statusCode = 201;
    return response.json(transaction);
  }
}