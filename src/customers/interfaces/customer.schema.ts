import * as mongoose from 'mongoose';
export const CustomerSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true },
    username: { type: String, unique: true },
    firstname: { type: String },
    lastname: { type: String },
    phone: { type: String },
    cellphone: { type: String },
    state: { type: String },
    cp: { type: String },
    country: { type: String },
    address: { type: String },
    active: { type: String },
  },
  { timestamps: true, collection: 'customers' },
);
