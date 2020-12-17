import { customFormField } from './custom-form-field';
import { MetadataKeys } from '../../meta-keys';
import { RadioOption, FieldType } from '@ngx-form/core';

export function RadioField(
  options: RadioOption[]
): (target: unknown, propertyKey: string) => void {
  return (target: unknown, propertyKey: string) => {
    customFormField(FieldType.RADIO, target, propertyKey);
    Reflect.defineMetadata(
      MetadataKeys.RADIO_OPTIONS,
      options,
      target,
      propertyKey
    );
  };
}
