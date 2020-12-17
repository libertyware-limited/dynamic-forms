import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroupDirective
} from '@angular/forms';
import { DynamicFormGroup } from '@ngx-form/ngx-builder';
import { WidgetOptions } from '@ngx-form/core';
import { FieldWidget } from './widgets/field';

@Component({
  selector: 'ngx-form-gen',
  templateUrl: 'form-gen.component.html'
})
export class FormGenComponent implements OnInit {
  group!: DynamicFormGroup<unknown>;

  @Input() widgets: { [key: string]: FieldWidget } = {};

  constructor(private groupDirective: FormGroupDirective) { }

  ngOnInit() {
    this.group = this.groupDirective.form as DynamicFormGroup<unknown>;
  }

  renderExists(option: WidgetOptions): boolean {
    const exists = this.widgets[option.fieldType] !== undefined;
    if (!exists) {
      console.log(`Field: ${option.fieldName} with render type ${option.fieldType} has no supported render`);
    }
    return exists;
  }

  onSubmit() {
    this.group.validateAllFormFields();
  }
}
