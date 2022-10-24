import { AppException } from "../../../../application/errors/AppException";

import { TransactionRepository } from "../../repositories/TransactionRepository";

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