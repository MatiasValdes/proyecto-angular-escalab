import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NewproductRoutingModule } from './newproduct-routing.module';
import { NewproductComponent } from './newproduct.component';

import { TwoDigitDecimaNumberDirectiveDirective } from 'src/app/directives/NewProduct/two-digit-decima-number-directive.directive';

@NgModule({
  declarations: [
    NewproductComponent,
    TwoDigitDecimaNumberDirectiveDirective
  ],
  imports: [
    CommonModule,
    NewproductRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NewproductModule { }
