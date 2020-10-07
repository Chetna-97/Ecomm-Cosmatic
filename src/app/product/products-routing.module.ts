import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from '../detail/detail.component';
import { ProductComponent } from './product.component';


const routes: Routes = [
    {path: '', component:ProductComponent },
    {path: 'product', component : ProductComponent},
    {path: ':id', component :DetailComponent},

    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],


})
export class ProductsRoutingModule { }

