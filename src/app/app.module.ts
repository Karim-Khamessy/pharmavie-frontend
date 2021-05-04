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
import { BillingListComponent } from './components/billing-list/billing-list.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { DescriptionReviewComponent } from './components/description-review/description-review.component';
import { PharmacyCardComponent } from './components/pharmacy-card/pharmacy-card.component';
import { PharmacyMapComponent } from './components/pharmacy-map/pharmacy-map.component';
import { DescriptionProductComponent } from './pages/description-product/description-product.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ROUTING } from './app.routing';
import { PromoListComponent } from './components/promo-list/promo-list.component';
import { PromoCardComponent } from './components/promo-card/promo-card.component';
import { NavProductComponent } from './pages/nav-product/nav-product.component';
import { CategoryNavComponent } from './components/category-nav/category-nav.component';
import { RelatedProductsComponent } from './components/related-products/related-products.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { ShippingMethodComponent } from './components/shipping-method/shipping-method.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { AdditionalInfosComponent } from './components/additional-infos/additional-infos.component';
import { ConfirmationFormComponent } from './components/confirmation-form/confirmation-form.component';
import { LoginComponent } from './pages/login/login.component';
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
<<<<<<< HEAD
    BillingListComponent,
    ProductDescriptionComponent,
    DescriptionReviewComponent,
    PharmacyCardComponent,
    PharmacyMapComponent,
    DescriptionProductComponent,
    LandingPageComponent,
    PromoListComponent,
    PromoCardComponent,
    NavProductComponent,
    CategoryNavComponent,
    RelatedProductsComponent,
    CartPageComponent,
    ShippingMethodComponent,
    PaymentFormComponent,
    AdditionalInfosComponent,
    ConfirmationFormComponent,
    LoginComponent
=======
    NavProductsComponent,
    NavTreeComponent,
    CategoriesListComponent,
    FooterComponent,
    BrandsFilterComponent,
    RatingsFilterComponent
>>>>>>> 898c80660bda406faa93730b60ccafed5bda71b7
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
<<<<<<< HEAD
    NgbModule, 
    ROUTING
=======
    NgbModule
>>>>>>> 898c80660bda406faa93730b60ccafed5bda71b7
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
