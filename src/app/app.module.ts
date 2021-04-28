import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap' ; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { BestProductsComponent } from './components/best-products/best-products.component';
import { LandingCarouselComponent } from './components/landing-carousel/landing-carousel.component';
import { ExtendedCardComponent } from './components/extended-card/extended-card.component';
import { ShippingItemComponent } from './components/shipping-item/shipping-item.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { OrderProductComponent } from './components/order-product/order-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductCardComponent,
    BestProductsComponent,
    LandingCarouselComponent,
    ExtendedCardComponent,
    ShippingItemComponent,
    PaymentMethodComponent,
    SigninFormComponent,
    OrderProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
