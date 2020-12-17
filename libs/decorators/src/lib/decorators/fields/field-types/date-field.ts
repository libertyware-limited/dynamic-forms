import { customFormField } from './custom-form-field';
import { FieldType } from '@ngx-form/core';

export function DateField(): (target: unknown, propertyKey: string) => void {
  return (target: unknown, propertyKey: string) =>
    customFormField(FieldType.DATE, target, propertyKey);
}
