import { WidgetOptions } from '@ngx-form/core';
import { MetadataKeys } from './decorators/meta-keys';

// eslint-disable-next-line @typescript-eslint/ban-types
export const getFormFieldsOptions = <T extends new (...args: unknown[]) => {}>(
  constructor: T
): WidgetOptions[] => {
  const target = new constructor();
  return (Reflect.getMetadata(MetadataKeys.FIELDS, target) || []).map((field: string) =>
    Reflect.getMetadata(MetadataKeys.FORM_FIELD, target, field)
  );
};
