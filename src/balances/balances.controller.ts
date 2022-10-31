import { Controller, Get, Param } from '@nestjs/common';

import { BalancesService } from './balances.service';
import { FindOneParams } from './find-one-params';

@Controller('balances')
export class BalancesController {
  constructor(private readonly balancesService: BalancesService) {}

  @Get(':cardNumber')
  findOne(@Param() params: FindOneParams) {
    return this.balancesService.findOne(params.cardNumber);
  }
}
