import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Auth0Guard } from 'src/app/guard/auth0.guard';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'detailproduct/:id', loadChildren: () => import('./components/detailproduct/detailproduct.module').then(m => m.DetailproductModule) },
    { path: 'editproduct/:id', loadChildren: () => import('./components/editproduct/editproduct.module').then(m => m.EditproductModule), canActivate: [Auth0Guard] },
    { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
    { path: 'newproduct', loadChildren: () => import('./components/newproduct/newproduct.module').then(m => m.NewproductModule), canActivate: [Auth0Guard] },
    { path: 'userinfo', loadChildren: () => import('./components/userinfo/userinfo.module').then(m => m.UserinfoModule), canActivate: [Auth0Guard] }]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }