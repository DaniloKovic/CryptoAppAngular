import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../services/api.service';
import { LoginRequest } from '../../models/LoginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  // selectedFile: File | null = null;

  constructor(private fb: FormBuilder, 
              private apiService: ApiService, 
              private router: Router,
              private cookieService: CookieService) {
    this.loginForm = this.fb.group({
      certificatePath: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // onFileSelected(event: any) {
  //   this.selectedFile = event.target.files[0];
  // }

  onSubmit(): void {
    if (this.loginForm.valid) {

      const data = new FormData();
      // data.append('certificate', this.selectedFile);
      data.append('certificatePath', this.loginForm.get('certificatePath')?.value);
      data.append('username', this.loginForm.get('username')?.value);
      data.append('password', this.loginForm.get('password')?.value);

      // const request: LoginRequest = this.loginForm.value;

      let request: LoginRequest = {
        certificatePath: this.loginForm.get('certificatePath')?.value,
        username: this.loginForm.get('username')?.value,
        password: this.loginForm.get('password')?.value
      }

      this.apiService.login(request).subscribe(
        response => {
          if (response.success) {

            this.cookieService.set('accessToken', response.accessToken);
            this.cookieService.set('refreshToken', response.refreshToken);

            this.router.navigate(['/algorithms']);
          } 
          else {
            console.error('Login failed', response.message);
          }
        }, 
        error => {
          console.error('Login error', error);
        });
    }
  }
}