import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userModel.findOne({ email, password });
if (user) {
return { success: true, userId: user._id };
}
return { success: false, message: 'Invalid credentials' };
}
}