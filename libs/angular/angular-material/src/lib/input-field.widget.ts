import { Component } from '@angular/core';
import { FieldWidget } from '@ngx-form/ngx-form';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ngx-form-material-input-widget',
  template: `
    <div class="example-container" [id]="fieldName + '-controls'">
      <mat-form-field>
        <input matInput [placeholder]="formControl?.readableName" />
        <mat-hint>{{ hintText }}</mat-hint>
        <mat-error *ngIf="group?.customValidateErrors | async as errors">
          <ng-container *ngFor="let error of errors[fieldName]; let i = index">
            <div>
              {{ error }}
            </div>
          </ng-container>
        </mat-error>
      </mat-form-field>
    </div>
  `
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class NgxMaterialInputWidget extends FieldWidget { }
