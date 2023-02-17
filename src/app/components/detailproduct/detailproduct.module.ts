import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '@auth0/auth0-angular';

import { DetailproductRoutingModule } from './detailproduct-routing.module';
import { DetailproductComponent } from './detailproduct.component';


@NgModule({
  declarations: [
    DetailproductComponent
  ],
  imports: [
    CommonModule,
    DetailproductRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-1wocgr2eiwyj7f2o.us.auth0.com',
      clientId: '198rttoCrPVpuIBwYIHwsuy0DVQIZnE7',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  ]
})
export class DetailproductModule { }
