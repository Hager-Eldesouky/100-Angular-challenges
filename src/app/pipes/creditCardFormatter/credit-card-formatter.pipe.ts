import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormatter'
})
export class CreditCardFormatterPipe implements PipeTransform {

  transform(cardNumber: string): string |undefined{

    if (!this.hasCorrectLength(cardNumber)) {
      return 'Invalid Card Length';

    }

    if (!this.isAllNumbers(cardNumber)) {
      return 'invalid character'

    }

    return this.formatCardNumber(cardNumber);
    

  }

  private hasCorrectLength(cardNumber: string): boolean {
    const cardNumberLenght = cardNumber.length;
    const isMasterDiscoverVisaCardLength = 16;
    const isAmericanExpressCardLenght = 15;
    if (cardNumberLenght === isMasterDiscoverVisaCardLength || cardNumberLenght === isAmericanExpressCardLenght) {
      return true;
    }
    return false;

  }

  private isAllNumbers(cardNo: string): boolean {
    const stringNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const totalValidCharachter = cardNo.split('').filter((char) => stringNumbers.includes(char)).length;

    return totalValidCharachter === cardNo.length

  }

  private formatCardNumber(cardNumber: string): string |undefined {
    const parts = cardNumber.match(/[\s\S]{1,4}/g);
   
   
    return parts?.join('-');

    /* return parts.join('-'); */
  }

}
