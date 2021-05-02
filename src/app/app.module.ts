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
import { NavProductsComponent } from './components/nav-products/nav-products.component';
import { NavTreeComponent } from './components/nav-tree/nav-tree.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrandsFilterComponent } from './components/brands-filter/brands-filter.component';
import { RatingsFilterComponent } from './components/ratings-filter/ratings-filter.component';

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
    OrderProductComponent,
    NavProductsComponent,
    NavTreeComponent,
    CategoriesListComponent,
    FooterComponent,
    BrandsFilterComponent,
    RatingsFilterComponent
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
