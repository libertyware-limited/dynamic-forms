import { FormControl } from '@angular/forms';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function foreverInvalid(c: FormControl) {
  return {
    foreverInvalid: {
      valid: false
    }
  };
}
export const FOREVER_INVALID_NAME = 'foreverInvalid';
