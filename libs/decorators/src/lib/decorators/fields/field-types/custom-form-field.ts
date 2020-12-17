import { WidgetOptions } from '@ngx-form/core';
import { MetadataKeys } from '../../meta-keys';

export const customFormField = (fieldType: string, target: unknown, propertyKey: string) => {
  const internalOptions: WidgetOptions = {
    fieldType,
    fieldName: propertyKey
  };
  Reflect.defineMetadata(
    MetadataKeys.FORM_FIELD,
    internalOptions,
    target,
    propertyKey
  );
  const fields = Reflect.getMetadata(MetadataKeys.FIELDS, target) || [];
  Reflect.defineMetadata(MetadataKeys.FIELDS, [...fields, propertyKey], target);
};
