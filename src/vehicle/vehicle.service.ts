import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vehicle } from '../schemas/vehicle.schema';

@Injectable()
export class VehicleService {
  constructor(@InjectModel(Vehicle.name) private vehicleModel: Model<Vehicle>) {}

  async createVehicle(vehicleData: any): Promise<Vehicle> {
    const createdVehicle = new this.vehicleModel(vehicleData);
    return createdVehicle.save();
  }
}