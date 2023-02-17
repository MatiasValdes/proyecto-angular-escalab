import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditproductRoutingModule } from './editproduct-routing.module';
import { EditproductComponent } from './editproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TwoDigitDecimaNumberDirectiveDirective } from 'src/app/directives/EditProduct/two-digit-decima-number-directive.directive';

@NgModule({
  declarations: [
    EditproductComponent,
    TwoDigitDecimaNumberDirectiveDirective
  ],
  imports: [
    CommonModule,
    EditproductRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditproductModule { }
