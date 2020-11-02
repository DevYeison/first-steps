import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument} from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user-dto';

@Injectable()
export class UserService {

    constructor(
        @InjectModel(User.name)
        private userRepository: Model<UserDocument>
        ){}

        async findAll(): Promise<User[]>{
            return await this.userRepository.find();
        }

        async create(createUserDto: CreateUserDto) : Promise<User> {
            const createdUser = new this.userRepository(createUserDto);
            return createdUser.save();
        }     

        async findByID(idUser: String): Promise<User>{
            return await this.userRepository.findById(idUser);
         }

        async updateUser(idUser: String, updateUser: CreateUserDto) : Promise<User>{
            return await this.userRepository.findOneAndUpdate({_id: idUser}, {$set: updateUser}, {new: true});
        }

        async delete(idUser: String): Promise<any>{
            return await this.userRepository.findOneAndRemove({_id: idUser});
        }
}
