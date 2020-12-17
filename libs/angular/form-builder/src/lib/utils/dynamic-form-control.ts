import { FormControl } from '@angular/forms';
import { RadioOption, TextareaOption } from '@ngx-form/core';
import { MetadataKeys } from '@ngx-form/decorators'
import { ValidationMetadata } from 'class-validator/types/metadata/ValidationMetadata';

import { DynamicFormGroupField } from '../models/dynamic-form-group-field';
import { DynamicFormGroup } from './dynamic-form-group';

export class DynamicFormControl extends FormControl {
  public validationDefinitions: ValidationMetadata[];

  constructor(fieldDefinition: DynamicFormGroupField) {
    super(fieldDefinition.data, fieldDefinition.validationFunctions);

    this.validationDefinitions = fieldDefinition.validationDefinitions;
  }

  private get formModel(): unknown {
    return (this.parent as DynamicFormGroup<unknown>).object;
  }


  get hint(): string {
    return this.metaData(MetadataKeys.HINT);
  }

  get readableName(): string {
    return this.metaData(MetadataKeys.DISPLAY_NAME) || this.ControlName;
  }

  get placeholder(): string {
    return this.metaData(MetadataKeys.PLACEHOLDER);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private metaData(key: string): any {
    return Reflect.getMetadata(key, this.formModel, this.ControlName);
  }

  get ControlName(): string {
    const controls: unknown = this.parent.controls;
    return Object.keys(controls).find(name => this === controls[name]) as string;
  }

  get radioOptions(): RadioOption[] {
    return this.metaData(MetadataKeys.RADIO_OPTIONS) || [];
  }

  get textareaOptions(): TextareaOption {
    return this.metaData(MetadataKeys.TEXTAREA_OPTIONS);
  }
}
