import { Injectable } from '@nestjs/common';

@Injectable()
export class BalancesService {
  findOne(cardNumber: string) {
    if (cardNumber[15] === '2' || cardNumber[15] === '5') {
      return {
        currentBalance: {
          usd: cardNumber
            .split('')
            .reduce(
              (previousValue, currentValue) =>
                previousValue + parseInt(currentValue),
              0,
            ),
        },
      };
    } else {
      return { currentBalance: { usd: 0 } };
    }
  }
}
