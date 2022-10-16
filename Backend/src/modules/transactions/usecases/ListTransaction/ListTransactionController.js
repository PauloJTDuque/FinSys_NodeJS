import { ListTransactionUseCase } from "./ListTransactionUseCase.js";

export class ListTransactionController {
  constructor() {
    this.listTransactionUseCase = new ListTransactionUseCase();
  }

  async handle(request, response) {
    const transaction = await this.listTransactionUseCase.execute();

    return response.json(transaction);
  }
}