import { Module } from '@nestjs/common';

import { BalancesModule } from './balances/balances.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [BalancesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
