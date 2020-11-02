import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nestjs',
  {
  useUnifiedTopology: true,
  useNewUrlParser: true, 
  useCreateIndex: true,
  useFindAndModify: false,

  connectionFactory: (connection)=>{
    connection.plugin(require('mongoose-unique-validator'));
    return connection;
  }
  }),
   UserModule,
  ]
})
export class AppModule {}
