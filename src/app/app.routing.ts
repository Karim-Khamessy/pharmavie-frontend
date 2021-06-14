import {RouterModule , Routes} from '@angular/router' ; 
<<<<<<< HEAD
=======
import { RegisterComponent } from './components/register/register.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
>>>>>>> 5b60fd22d6b34088e88c37413c1092cfc3c45161
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { DescriptionProductComponent } from './pages/description-product/description-product.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { NavProductComponent } from './pages/nav-product/nav-product.component';
import { ProductsComponent } from './pages/products/products.component';
<<<<<<< HEAD
import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';
=======
>>>>>>> 5b60fd22d6b34088e88c37413c1092cfc3c45161


const APP_ROUTING : Routes =[
    { path: 'landingPage' , component : LandingPageComponent} , 
<<<<<<< HEAD
  {path: 'description/:name', component: DescriptionProductComponent}, 
  {path: 'navigation', component:NavProductComponent }, 
  {path : 'cart' , component: CartPageComponent}, 
  {path : 'login', component: LoginComponent},  
  {path : 'products', component : ProductsComponent} , 
  {path : 'Edit profile', component : UpdateProfileComponent } , 
=======
  {path: 'description/:id', component: DescriptionProductComponent}, 
  {path: 'navigation', component:NavProductComponent }, 
  {path : 'cart' , component: CartPageComponent}, 
  {path : 'login', component: LoginComponent},  
  {path : 'register', component: RegisterComponent},
  {path : 'products', component : ProductsComponent} , 
>>>>>>> 5b60fd22d6b34088e88c37413c1092cfc3c45161
  {path: '', redirectTo:'/landingPage', pathMatch: 'full'}
] ; 


export const ROUTING = RouterModule.forRoot(APP_ROUTING); 