import {
    Controller,
    Post,
    Body,
    Get,
    Put,
    Param,
    Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    @Post('/signup')
    signUp(@Body() registerForm) {
        return this.authService.signUp(registerForm);
    }

    @Post('/signin')
    signIn(@Body() { name, password }) {
        console.log(
            'Cigan-log: AuthController -> signIn -> password',
            password,
        );
        console.log('Cigan-log: AuthController -> signIn ->  name', name);
        return this.authService.signIn(name, password);
    }

    @Get('/users')
    getAllUsers() {
        return this.authService.getAllUsers();
    }

    @Put('/password/:id')
    changePassword(@Param() id, @Body() { oldPassword, newPassword }) {
        return this.authService.changePassword(id, oldPassword, newPassword);
    }

    @Delete('/:id')
    deleteUser(@Param() id) {
        return this.authService.deleteUser(id);
    }
}
