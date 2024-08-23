// moment.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'moment'
})
export class MomentPipe implements PipeTransform {
  transform(value: string, operation: string, formatOrAmount?: string | number, unitOrDate?: string | number): string | boolean | number {
    let date = moment(value);

    switch (operation) {
      case 'Format':
        return date.format(formatOrAmount as string);
      case 'Subtract':
        return date.subtract(formatOrAmount as number, unitOrDate as moment.unitOfTime.DurationConstructor).format('YYYY-MM-DD');
      case 'Add':
        return date.add(formatOrAmount as number, 'hours').format('YYYY-MM-DD HH:mm:ss');
        case 'Diff':
          let diffDate = moment(unitOrDate as string);
          return diffDate.diff(date, formatOrAmount as moment.unitOfTime.Diff);
      case 'Before':
        return date.isBefore(unitOrDate as string);
      case 'After':
        return date.isAfter(unitOrDate as string);
      default:
        return value;
    }
  }
}