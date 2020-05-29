import { MoneyService } from './money.service';
import { Controller, Put, Param, Body } from '@nestjs/common';

@Controller('money')
export class MoneyController {
    constructor(private moneyService: MoneyService) {}

    @Put('/:id')
    updateUserBalance(@Param() id, @Body() { balance }) {
        return this.moneyService.updateUserBalance(id, balance);
    }

    @Put('send/:id')
    sendMoney(@Param() id, @Body() { reciever, cost }) {
        console.log('Cigan-log: sendMoney -> cost', cost);
        return this.moneyService.sendMoney(id, reciever, cost);
    }
}
