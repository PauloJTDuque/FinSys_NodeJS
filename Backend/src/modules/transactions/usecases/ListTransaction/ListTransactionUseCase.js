import { AppException } from "../../../../application/errors/AppException.js";

import { TransactionRepository } from "../../repositories/TransactionRepository.js";

export class ListTransactionUseCase {
  constructor() {
    this.transactionRepository = TransactionRepository.getInstance();
  }

  async execute() {
    const transaction = await this.transactionRepository.list();

    if (!transaction){
      throw new AppException(404, "Transactions not found!" )
    }

    return transaction;
  }
}