import { MetadataKeys } from '../../meta-keys';

export function placeholder(
  placeholderText: string
): (target: unknown, propertyKey: string) => void {
  return (target: unknown, propertyKey: string) => {
    Reflect.defineMetadata(
      MetadataKeys.PLACEHOLDER,
      placeholderText,
      target,
      propertyKey
    );
  };
}
