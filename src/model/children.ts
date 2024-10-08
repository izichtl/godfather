import mongoose, { Document, Schema } from 'mongoose';

export interface IChildren extends Document {
  name: string;
  nascimento: string;
  sexo: string;
  presente: string;
}

const UserSchema: Schema<IChildren> = new Schema({
  name: { type: String, required: true },
  nascimento: { type: String, required: true},
  sexo: { type: String, required: true},
  presente: { type: String, required: true },
});

const ChildrenModel = mongoose.model<IChildren>('Children', UserSchema);

export default ChildrenModel;