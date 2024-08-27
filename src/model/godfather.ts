import mongoose, { Document, Schema } from 'mongoose';

export interface IGodfather extends Document {
  name: string;
  email: string;
  phone: string;
}

const UserSchema: Schema<IGodfather> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true }
});

const GodfatherModel = mongoose.model<IGodfather>('Godfather', UserSchema);

export default GodfatherModel;