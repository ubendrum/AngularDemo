import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpComponent } from './components/add-emp/add-emp.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UpdEmpComponent } from './components/upd-emp/upd-emp.component';
import { UserManagerComponent } from './components/user-manager/user-manager.component';
import { ViewEmpComponent } from './components/view-emp/view-emp.component';

const routes: Routes = [
  {path :'', redirectTo : 'employees/admin',pathMatch:'full'},
  {path : 'employees/admin',component : UserManagerComponent },
  {path : 'employees/addemp',component : AddEmpComponent },
  {path : 'employees/editemp/:empid',component : UpdEmpComponent },
  {path : 'employees/viewemp/:empid',component : ViewEmpComponent },
  {path : '**',component : PageNotFoundComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
