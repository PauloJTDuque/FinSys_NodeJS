import { Transaction } from "../models/Transaction.js";

export class TransactionRepository {
  transaction;

  static INSTANCE;

  constructor() {
    this.transaction = [];
  }

  static getInstance() {
    if (!TransactionRepository.INSTANCE) {
     TransactionRepository.INSTANCE = new TransactionRepository();
    }

    return TransactionRepository.INSTANCE;
  }

  create({ titulo, valor, tipo, categoria }) {
    const user = new Transaction();

    Object.assign(this.transaction, {
      titulo,
      valor,
      tipo,
      categoria,
      created_at: new Date(),
    });

    this.transaction.push(this.transaction);

    return this.transaction;
  }

  list() {
    return this.transaction;
  }
}