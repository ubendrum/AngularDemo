import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserManagerComponent } from './components/user-manager/user-manager.component';
import { AddEmpComponent } from './components/add-emp/add-emp.component';
import { UpdEmpComponent } from './components/upd-emp/upd-emp.component';
import { ViewEmpComponent } from './components/view-emp/view-emp.component';
import { AsgDutyComponent } from './components/asg-duty/asg-duty.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    
    UserManagerComponent,
    AddEmpComponent,
    UpdEmpComponent,
    ViewEmpComponent,
    AsgDutyComponent,
    PageNotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
