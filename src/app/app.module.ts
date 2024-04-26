import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TestComponent } from './test/test.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { ContainerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
import { FeaturedBrandsComponent } from './container/featured-brands/featured-brands.component';
import { TestChildComponent } from './test/test-child/test-child.component';
import { TestChild2Component } from './test/test-child2/test-child2.component';
import { LifecycleTestComponent } from './test/lifecycle-test/lifecycle-test.component';
import { SetBackground } from './CustomDirectives/SetBackground.directive';
import { HighlightDirective } from './CustomDirectives/highlight.directive';
import { AppHoverDirective } from './CustomDirectives/app-hover.directive';
import { DisableProductDirective } from './CustomDirectives/disable-product.directive';
import { ClassDirective } from './test/TestCustomDirectives/class.directive';
import { StyleDirective } from './test/TestCustomDirectives/style.directive';
import { IfDirective } from './test/TestCustomDirectives/if.directive';
import { TestRandomComponent } from './test/test-random/test-random.component';
import { TestServiceComponent } from './test-service/test-service.component';
import { HomeComponent } from './test-service/home/home.component';
import { AdminComponent } from './test-service/admin/admin.component';
import { UserDetailComponent } from './test-service/admin/user-detail/user-detail.component';
import { HeroComponent } from './test-service/home/hero/hero.component';
import { SidebarComponent } from './test-service/home/sidebar/sidebar.component';
import { SubscribeService } from './Services/subscribe.service';
import { UserListComponent } from './test-service/admin/user-list/user-list.component';
import { UserService } from './Services/user.service';
import { LoggerService } from './Services/logger.service';
import { TestObservablesComponent } from './test-observables/test-observables.component';

export const USER_TOKEN = new InjectionToken<UserService>('USER_SERVICE');
export const USER_TOKEN2 = new InjectionToken<UserService>('USER_SERVICE2');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TestComponent,
    TopMenuComponent,
    MainMenuComponent,
    ContainerComponent,
    SearchComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailComponent,
    FeaturedBrandsComponent,
    TestChildComponent,
    TestChild2Component,
    LifecycleTestComponent,
    SetBackground,
    HighlightDirective,
    AppHoverDirective,
    DisableProductDirective,
    ClassDirective,
    StyleDirective,
    IfDirective,
    TestRandomComponent,
    TestServiceComponent,
    HomeComponent,
    AdminComponent,
    UserDetailComponent,
    HeroComponent,
    SidebarComponent,
    UserListComponent,
    TestObservablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SubscribeService, 
    {provide: USER_TOKEN, useClass: UserService}, 
    {provide: USER_TOKEN2, useClass: UserService},
    LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
