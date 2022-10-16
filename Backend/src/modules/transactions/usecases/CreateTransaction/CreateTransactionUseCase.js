import { TransactionRepository } from "../../repositories/TransactionRepository.js";

export class CreateTransactionUseCase {
  constructor() {
    this.transactionRepository = TransactionRepository.getInstance();
  }

  execute({ titulo, valor, tipo, categoria }) {

    const transaction = this.transactionRepository.create({
      titulo,
      valor,
      tipo,
      categoria,
    });

    return transaction;
  }
}