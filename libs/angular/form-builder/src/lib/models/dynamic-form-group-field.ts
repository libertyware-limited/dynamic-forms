import { ValidationMetadata } from 'class-validator/types/metadata/ValidationMetadata';
import { DynamicFormGroup } from '../utils/dynamic-form-group';

export interface DynamicFormGroupField {
  data: unknown | DynamicFormGroup<unknown>;
  validationFunctions: unknown[];
  validationDefinitions: ValidationMetadata[];
}
