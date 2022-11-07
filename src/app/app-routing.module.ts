import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { ListCategoryComponent } from './components/list-category/list-category.component';
import { BusinessRegisterComponent } from './components/register/business-register/business-register.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';
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
  { path:'products',component:ListProductComponent},
  { path:'categories',component:ListCategoryComponent},
  { path:'product/new',component:AddProductComponent},
  { path:'category/new',component:AddCategoryComponent},
  { path:'product/edit/:id',component:EditProductComponent},

  { path:'category/edit/:id',component:EditCategoryComponent},
  { path: 'register-businesss', component: BusinessRegisterComponent },
  { path: 'panel', component:PanelComponent ,
  
      children:[
        { path: '', redirectTo:'dashboard', pathMatch: 'full' },
        { path: 'products',component:ListProductComponent},
        { path: 'products/new',component:AddProductComponent},
        { path: 'products/edit/:id',component:EditProductComponent},
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
