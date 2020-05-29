import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './auth.repository';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
    ) {}
    async signUp(registerForm) {
        const ifExist = await this.userRepository.find({
            where: [{ username: `${registerForm.name}` }],
        });
        if (ifExist.length > 0) return { username: '', result: false };
        return this.userRepository.signUp(registerForm);
    }

    async signIn(username, password) {
        console.log('Cigan-log: AuthService -> signIn ->  password', password);
        console.log('Cigan-log: AuthService -> signIn -> username', username);
        const user = await this.userRepository.findOne({
            where: [{ username, password }],
        });
        console.log('Cigan-log: AuthService -> signIn -> user', user);
        if (user !== undefined) return { result: true, user };
        else return { result: false, user: undefined };
    }

    async changePassword(id, oldPassword, newPassword) {
        const user = await this.userRepository.findOne(id);
        if (user.password === oldPassword) {
            user.password = newPassword;
            user.save();
            return { result: true };
        } else return { result: false };
    }

    async getAllUsers() {
        return await this.userRepository.find();
    }

    async deleteUser(id) {
        console.log('Cigan-log: AuthService -> deleteUser -> id', id);
        const user = await this.userRepository.findOne(id);
        console.log('Cigan-log: AuthService -> deleteUser -> user', user);
        if (user !== undefined) {
            await user.remove();
            return { result: true };
        } else return { result: false };
    }
}
