import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { response } from 'express';
import { CreateUserDto } from './dto/create-user-dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor( private readonly userService: UserService){}

    @Post()
    create(@Body() createUserDto: CreateUserDto, @Res() response){
        return this.userService.create(createUserDto).then( user =>{
            response.status(HttpStatus.CREATED).json(user);
        }).catch( ()=>{
            response.status(HttpStatus.FORBIDDEN).json({message: 'the user was not created'});
        });
    } 

    @Get()
    getAll(){
         return this.userService.findAll();
    }

    @Get('id/:id')
    getById(@Res() response,@Param('id') idUser ){
        this.userService.findByID(idUser).then( user =>{
            response.status(HttpStatus.OK).json(user);
        }).catch( res =>{
            response.status(HttpStatus.FORBIDDEN).json({message: 'no user returned'})
        }
        );
    }

    @Put('id/:id')
    update(@Body() createUserDto: CreateUserDto, @Res() response, @Param('id') idUser ) {
        this.userService.updateUser(idUser, createUserDto).then( user => {
            return response.status(HttpStatus.OK).json(user);
        }).catch(()=>{
            response.status(HttpStatus.FORBIDDEN).json({message: 'the user was no updated'})
        });
    }

    @Delete('id/:id')
    delete(@Res()response, @Param('id') idUser){
        this.userService.delete(idUser).then(res =>{
            response.status(HttpStatus.OK).json(res);
            }
        ).catch(()=>{
            response.status(HttpStatus.FORBIDDEN).json({message: 'the user was no deleted'})
        });
    }
}
