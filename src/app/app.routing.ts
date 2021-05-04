import {RouterModule , Routes} from '@angular/router' ; 
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { DescriptionProductComponent } from './pages/description-product/description-product.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { NavProductComponent } from './pages/nav-product/nav-product.component';


const APP_ROUTING : Routes =[
    { path: 'landingPage' , component : LandingPageComponent} , 
  {path: 'description', component: DescriptionProductComponent}, 
  {path: 'navigation', component:NavProductComponent }, 
  {path : 'cart' , component: CartPageComponent}, 
  {path : 'login', component: LoginComponent}, 
  {path: '', redirectTo:'/landingPage', pathMatch: 'full'}
] ; 


export const ROUTING = RouterModule.forRoot(APP_ROUTING); 