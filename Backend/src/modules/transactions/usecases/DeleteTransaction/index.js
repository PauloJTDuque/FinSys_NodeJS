import { TransactionRepository } from "../../repositories/TransactionRepository";
import { DeleteTransactionUseCase } from "./DeleteTransactionUseCase.js";
import { DeleteTransactionController } from "./DeleteTransactionController.js";


const transactionRepository = TransactionRepository.getInstance();

const deleteTransactionUseCase = new DeleteTransactionUseCase(transactionRepository);

const deleteTransactionController = new DeleteTransactionController(deleteTransactionUseCase);

export { deleteTransactionController };