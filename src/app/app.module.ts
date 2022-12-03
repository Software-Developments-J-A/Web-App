import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register/register.component';
import { ListProductComponent } from './components/products/list-product/list-product.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { PanelComponent } from './components/panel/panel.component';
import { BodyComponent } from './components/body/body.component';
import { BodyHeaderComponent } from './components/body-header/body-header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { BusinessRegisterComponent } from './components/register/business-register/business-register.component';
import { ListCategoryComponent } from './components/category/list-category/list-category.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { EditCategoryComponent } from './components/category/edit-category/edit-category.component';
import { ShopComponent } from './components/shop/shop/shop.component';
import { CheckoutComponent } from './components/shop/checkout/checkout.component';
import { ThankPageComponent } from './components/shop/thank-page/thank-page.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { OrdersComponent } from './components/shop/orders/orders.component';

@NgModule({

  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ListProductComponent,
    AddProductComponent,
    EditProductComponent,
    PanelComponent,
    BodyComponent,
    BodyHeaderComponent,
    SidenavComponent,
    DashboardComponent,
    SettingsComponent,
    BusinessRegisterComponent,
    ListCategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    ShopComponent,
    CheckoutComponent,
    ThankPageComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
