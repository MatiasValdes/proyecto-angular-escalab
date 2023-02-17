import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '@auth0/auth0-angular';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProductComponent } from 'src/app/components/product/product.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-1wocgr2eiwyj7f2o.us.auth0.com',
      clientId: '198rttoCrPVpuIBwYIHwsuy0DVQIZnE7',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  ]
})
export class HomeModule { }
