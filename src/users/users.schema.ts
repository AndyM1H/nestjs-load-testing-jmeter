import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User extends Document {
  @Prop()
  name: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.index({ name: 'text', content: 'text' });
UserSchema.index({ name: 1 });
