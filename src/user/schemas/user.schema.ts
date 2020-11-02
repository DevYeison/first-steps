import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User{
    @Prop({
        maxlength: 15,
        required: true
    })
     firstName: string;
     
     @Prop({
        maxlength: 15
     })
     secondFirstName: string;
     
     @Prop({
        maxlength: 15,
        required: true
     })
     firstLastName: string;
     
     @Prop({
        maxlength: 15
     })
     secondLastName: string;
     
     @Prop()
     age: number;
     
     @Prop()
     city: string;
     
     @Prop()
     country: string;
     
     @Prop()
     pregrade: string;

     @Prop({
         lowercase: true,
         required: true,
         unique:  true
     })
     email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);