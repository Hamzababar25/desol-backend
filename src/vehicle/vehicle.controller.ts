import { Controller, Post, Body, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { UploadFile } from 'utils/file-uploading.utils';

@Controller('vehicle-info')
export class VehicleController {
    private readonly logger = new Logger(VehicleController.name);
  constructor(private vehicleService: VehicleService) {}

//   @Post()
//   async createVehicle(@Body() body: any) {
//     return this.vehicleService.createVehicle(body);
//   }
  @Post()
  async create(@Body() body: any) {
    try {
      if (!body?.pictures || !Array.isArray(body.pictures) || body.pictures.length === 0) {
        throw new HttpException('Pictures array is required', HttpStatus.BAD_REQUEST);
      }

      const uploadedPictures = await Promise.all(body.pictures.map(async (picture) => {
        return await UploadFile(picture);
      }));

      const newVehicle = {
        ...body,
        pictures: uploadedPictures,
      };

      const createdVehicle = await this.vehicleService.createVehicle(newVehicle);

      return {
        success: true,
        result: createdVehicle,
      };
    } catch (error) {
        this.logger.error(error);
        // Re-throw the original error to maintain the response status code
        throw error;
    }
  }
}