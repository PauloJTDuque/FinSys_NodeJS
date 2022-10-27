import { AppException } from "../../../../application/errors/AppException.js";

import { TransactionRepository } from "../../repositories/TransactionRepository.js";

export class DeleteTransactionUseCase {
    constructor() {
        this.transactionRepository = TransactionRepository.getInstance();
    }

    execute(id) {

        const transaction = this.transactionRepository.findById(id);

        // if(!transaction) {
        //     throw new AppException(404, "Transaction not found");
        // }
        return this.transactionRepository.deleteByID(id);
    }
}