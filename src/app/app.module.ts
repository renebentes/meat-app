import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorService } from './error.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestaurantService } from './restaurants/restaurant.service';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurants/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurants/restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurants/restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurants/restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurants/restaurant-detail/reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent
  ],
  imports: [BrowserModule, RouterModule, AppRoutingModule, HttpClientModule],
  providers: [ErrorService, RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule {}
