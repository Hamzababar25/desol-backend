import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Vehicle extends Document {
  @Prop({ required: true })
  carModel: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  maxPictures: number;

  @Prop([String])
  pictures: string[];

  @Prop({ required: true })
  user: string;
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);