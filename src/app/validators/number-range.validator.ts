import { AbstractControl, ValidatorFn } from '@angular/forms';

export const NumberRange = (init: number, end: number): ValidatorFn => {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    if (c.value && (isNaN(c.value) || c.value < init || c.value > end)) {
      return { range: true };
    }
    return null;
  };
};
