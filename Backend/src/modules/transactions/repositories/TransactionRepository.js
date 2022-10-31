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

    Object.assign(transaction, {
      titulo,
      valor,
      tipo,
      categoria,
      created_at: new Date(),
    });
    
    // this.transaction = [];
    this.transaction.push(transaction);

    return transaction;
  }
  
  list() {
    return this.transaction;
  }

  deleteById(id) {
    const index = this.transactions.findIndex((transaction) => transaction.id === id);
  
    this.transactions.splice(index, 1);
  
    return;
  }  
}
