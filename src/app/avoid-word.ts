import { AbstractControl } from '@angular/forms';

export function AvoidWord(control: AbstractControl) {
  if (control.value.includes('hack')) {
    return { avoidWord: true };
  }
  return null;
}
