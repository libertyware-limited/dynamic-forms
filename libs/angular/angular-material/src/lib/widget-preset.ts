import { RenderOptions, FieldWidget } from '@ngx-form/ngx-form';
import { FieldType } from '@ngx-form/core';
import { NgxMaterialInputWidget } from './input-field.widget';
import { NgxMaterialDateWidget } from './date-field.widget';
import { NgxMaterialRadioWidget } from './radio-field.widget';
import { NgxMaterialTextareaWidget } from './textarea-field.widget';

export const materialDesignRenderOptions: RenderOptions = {
  [FieldType.TEXT]: NgxMaterialInputWidget as unknown as FieldWidget,
  [FieldType.RADIO]: NgxMaterialRadioWidget as unknown as FieldWidget,
  [FieldType.DATE]: NgxMaterialDateWidget as unknown as FieldWidget,
  [FieldType.TEXTAREA]: NgxMaterialTextareaWidget as unknown as FieldWidget,
};
