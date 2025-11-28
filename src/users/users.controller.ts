import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user.dto";
@Controller()
export class UsersController {
    constructor(private readonly usersService: UsersService) {

    }
    @Get('users')
    findAll() {
        return this.usersService.getUsers();
    }
    @Post('users')
    createUser(@Body() user: CreateUserDto) {
        this.usersService.createUser(user);
        return { message: 'User created successfully' };
    }
}