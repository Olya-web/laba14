import { UserRepository } from './../auth/auth.repository';
import { Module } from '@nestjs/common';
import { MoneyController } from './money.controller';
import { MoneyService } from './money.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([UserRepository])],
    controllers: [MoneyController],
    providers: [MoneyService],
})
export class MoneyModule {}
