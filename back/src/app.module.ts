import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { MoneyModule } from './money/money.module';

@Module({
    imports: [TypeOrmModule.forRoot(typeOrmConfig), AuthModule, MoneyModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
