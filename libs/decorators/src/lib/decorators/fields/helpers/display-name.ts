import { MetadataKeys } from '../../meta-keys';

export function displayName(
  name: string
): (target: unknown, propertyKey: string) => void {
  return (target: unknown, propertyKey: string) => {
    Reflect.defineMetadata(
      MetadataKeys.DISPLAY_NAME,
      name,
      target,
      propertyKey
    );
  };
}
