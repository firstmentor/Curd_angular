import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { EditrestoComponent } from './editresto/editresto.component';
import { ShowrestoComponent } from './showresto/showresto.component';


const routes: Routes = [
  {path:'add',component:AddRestoComponent},
  {path:'add/:id',component:AddRestoComponent},
  {path: 'edit/:id', component: EditrestoComponent },
  {path: 'show/:id', component: ShowrestoComponent },
  {path:'list',component:ListRestoComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'update',component:UpdateRestoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
