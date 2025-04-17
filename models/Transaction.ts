import { Schema, model } from 'mongoose';

const transactionSchema = new Schema({
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  description: { type: String, required: true },
  category: { type: String, required: true }
});

export default model('Transaction', transactionSchema);
