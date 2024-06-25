import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartWindowComponent } from './components/start-window/start-window.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RegistrationResponseComponent } from './components/registration-response/registration-response.component';
import { LoginComponent } from './components/login/login.component';
import { AlgorithmsComponent } from './components/algorithms/algorithms.component';
import { FileContentComponent } from './components/file-content/file-content.component';

const routes: Routes = [
  { path: '', component: StartWindowComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration-response', component: RegistrationResponseComponent },
  { path: 'algorithms', component: AlgorithmsComponent },
  { path: 'file-content', component: FileContentComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
