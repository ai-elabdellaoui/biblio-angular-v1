import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import {FormsModule} from '@angular/forms';
import { AdminsComponent } from './admin/admins/admins.component';
import { HttpClientModule} from '@angular/common/http';

import { AchatComponent } from './admin/achat/achat.component';
import { AgentComponent } from './admin/agent/agent.component';
import { AdherentComponent } from './admin/adherent/adherent.component';
import { BiblioComponent } from './admin/biblio/biblio.component';
import { EmpruntComponent } from './admin/emprunt/emprunt.component';
import { RouterModule, Routes } from '@angular/router';
import { AchatsComponent } from './admin/achat/List-achats/achats.component';
import { AchatDetailsComponent } from './admin/achat/achat-details/achat-details.component';
import { CreateAdminComponent } from './admin/admins/create-admin/create-admin.component';
import { ListAdminsComponent } from './admin/admins/list-admins/list-admins.component';

const biblioRoutes : Routes = [
  {path:"admin",component : AdminComponent},
  {path:"login", component:LoginComponent},
  {path:"admins", component:AdminsComponent},
  {path:"achat", component:AchatComponent},
  {path:"agent", component:AgentComponent},
  {path:"emprunt", component:EmpruntComponent},
  {path:"adherent", component:AdherentComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    AchatComponent,
    AgentComponent,
    AdherentComponent,
    BiblioComponent,
    EmpruntComponent,
    AchatsComponent,
    AchatDetailsComponent,
    AdminsComponent,
    CreateAdminComponent,
    ListAdminsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(
      biblioRoutes
    )
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AppModule { }
