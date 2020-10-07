import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import{RouterModule,Routes} from '@angular/router';
import { ProductComponent } from './product/product.component';
import{HttpClientModule} from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';
import { ContactComponent } from './contact/contact.component';
const routes:Routes=[
  {
    path:'',
      redirectTo:'home',
      pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },

  {
    path:'product/detail/:id',
    component:DetailComponent
  },
  {
    path:'detail/:id',
    component:DetailComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  ProductComponent,
   DetailComponent,
   ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
