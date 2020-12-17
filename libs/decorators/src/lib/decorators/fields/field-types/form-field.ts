import { customFormField } from './custom-form-field';

export function formField(
  type: string
): (target: unknown, propertyKey: string) => void {
  return (target: unknown, propertyKey: string) =>
    customFormField(type, target, propertyKey);
}
