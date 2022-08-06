import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform_name',
})
export class TransformName implements PipeTransform {
  fieldNames: Array<string> = [
    'performance goals',
    'key performance measures',
    'job holder’s comments',
    'score',
    'rating',
    'personal development goals',
    'manager support',
    'activity to achieve goal',
  ];

  transform(value: string) {
    const trueName = this.fieldNames.find((item) => item.includes(value));
    return trueName;
  }
}
