import { Document } from 'mongoose';

export interface Customer extends Document {
  readonly _id: string;
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  phone: string;
  cellphone: string;
  state: string;
  cp: string;
  country: string;
  address: string;
}
