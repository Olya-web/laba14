import { UserRepository } from './../auth/auth.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MoneyService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
    ) {}
    async updateUserBalance(id, balance) {
        const user = await this.userRepository.find(id);
        user[0].balance = balance;
        user[0].save();
        return true;
    }

    async sendMoney(id, username, cost) {
        const sender = await this.userRepository.findOne(id);
        const reciever = await this.userRepository.findOne({
            where: [{ username }],
        });
        if (reciever === undefined) return { result: false, balance: '' };

        sender.balance = (+sender.balance - cost).toString();
        reciever.balance = `${+reciever.balance + +cost}`;
        sender.save();
        reciever.save();
        return { result: true, balance: sender.balance };
    }
}
