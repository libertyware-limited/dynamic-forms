import { customFormField } from './custom-form-field';
import { FieldType, TextareaOption } from '@ngx-form/core';
import { MetadataKeys } from '../../meta-keys';

export function Textareafield(
  options: TextareaOption = { cols: 5, rows: 3 }
): (target: unknown, propertyKey: string) => void {
  return (target: unknown, propertyKey: string) => {
    customFormField(FieldType.TEXTAREA, target, propertyKey);
    Reflect.defineMetadata(
      MetadataKeys.TEXTAREA_OPTIONS,
      options,
      target,
      propertyKey
    );
  };
}
