import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { User, UserSchema } from './schemas/user.schema';
import { Vehicle, VehicleSchema } from './schemas/vehicle.schema';
import { VehicleController } from './vehicle/vehicle.controller';
import { VehicleService } from './vehicle/vehicle.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://hamza025:mynameisjeff786@cluster0.ns2rve7.mongodb.net/vehicle'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Vehicle.name, schema: VehicleSchema }]),
  ],
  controllers: [AuthController, VehicleController],
  providers: [AuthService, VehicleService],
})
export class AppModule {}