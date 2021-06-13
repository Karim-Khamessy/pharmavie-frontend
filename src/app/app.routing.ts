import {RouterModule , Routes} from '@angular/router' ; 
import { RegisterComponent } from './components/register/register.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { DescriptionProductComponent } from './pages/description-product/description-product.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { NavProductComponent } from './pages/nav-product/nav-product.component';
import { ProductsComponent } from './pages/products/products.component';


const APP_ROUTING : Routes =[
    { path: 'landingPage' , component : LandingPageComponent} , 
  {path: 'description/:id', component: DescriptionProductComponent}, 
  {path: 'navigation', component:NavProductComponent }, 
  {path : 'cart' , component: CartPageComponent}, 
  {path : 'login', component: LoginComponent},  
  {path : 'register', component: RegisterComponent},
  {path : 'products', component : ProductsComponent} , 
  {path: '', redirectTo:'/landingPage', pathMatch: 'full'}
] ; 


export const ROUTING = RouterModule.forRoot(APP_ROUTING); 