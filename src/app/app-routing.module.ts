import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { ListCategoryComponent } from './components/list-category/list-category.component';
import { BusinessRegisterComponent } from './components/register/business-register/business-register.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { ListProductComponent } from './components/products/list-product/list-product.component';
import { SettingsComponent } from './components/settings/settings.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PanelComponent } from './components/panel/panel.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register-business', component: BusinessRegisterComponent },
  { path: 'panel', component:PanelComponent ,
      children:[
        { path: '', redirectTo:'dashboard', pathMatch: 'full' },
        { path: 'products',component:ListProductComponent},
        { path: 'products/new',component:AddProductComponent},
        { path: 'products/edit/:id',component:EditProductComponent},
        { path: 'categories',component:ListCategoryComponent},
        { path: 'category/new',component:AddCategoryComponent},
        { path: 'category/edit/:id',component:EditCategoryComponent},
        { path: 'dashboard', component:DashboardComponent },
        { path: 'settings', component:SettingsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
