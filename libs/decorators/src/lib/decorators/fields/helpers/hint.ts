import { MetadataKeys } from '../../meta-keys';

export function hint(
  hintText: string
): (target: unknown, propertyKey: string) => void {
  return (target: unknown, propertyKey: string) => {
    Reflect.defineMetadata(
      MetadataKeys.HINT,
      hintText,
      target,
      propertyKey
    );
  };
}
