import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RegistrationComponent } from './components/registration/registration.component';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatOption, MatOptionModule, MatOptionSelectionChange } from '@angular/material/core';
import { StartWindowComponent } from './components/start-window/start-window.component';
import { RegistrationResponseComponent } from './components/registration-response/registration-response.component';
import { LoginComponent } from './components/login/login.component';
import { AlgorithmsComponent } from './components/algorithms/algorithms.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { FileContentComponent } from './components/file-content/file-content.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    StartWindowComponent,
    RegistrationResponseComponent,
    LoginComponent,
    AlgorithmsComponent,
    FileContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatOptionModule,
    MatLabel,
    MatOption,
    MatOptionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [
    CookieService, 
    AuthGuard, 
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptor, 
      multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
