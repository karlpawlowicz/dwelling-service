import { Injectable } from '@nestjs/common';

@Injectable()
export class BalancesService {
  findOne(cardNumber: string) {
    let balance = 0;

    if (cardNumber[15] === '2' || cardNumber[15] === '5') {
      balance = cardNumber
        .split('')
        .reduce(
          (previousValue, currentValue) =>
            previousValue + parseInt(currentValue),
          0,
        );
    }

    return { currentBalance: { usd: balance } };
  }
}
