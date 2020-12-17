export interface ShortValidationErrors {
  [key: string]: string[] | ShortValidationErrors | unknown;
}
