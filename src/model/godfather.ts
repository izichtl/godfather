import mongoose, { Document, Schema } from 'mongoose';
import { IChildren } from './children';

export interface IGodfather extends Document {
  name: string;
  email: string;
  phone: string;
  children: IChildren[]
}

const UserSchema: Schema<IGodfather> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  children: { type: [Object], required: false }
});

const GodfatherModel = mongoose.model<IGodfather>('Godfather', UserSchema);

export default GodfatherModel;