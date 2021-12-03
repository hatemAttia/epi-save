import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ChatComponent } from './modules/chat/chat.component';
import { HomeComponent } from './modules/home/home.component';
import { ProfilComponent } from './modules/profil/profil.component';
import { SaverListComponent } from './modules/saver-list/saver-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'saver', component: SaverListComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'profil', component: ProfilComponent },
{ path: 'login', component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
