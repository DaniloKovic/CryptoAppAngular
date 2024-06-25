import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { RegistrationRequest } from '../../models/RegistrationRequest';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, 
              private apiService: ApiService,
              private router: Router) 
  {
      this.registrationForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
        passwordConfirmation: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) 
    {
      const request: RegistrationRequest = this.registrationForm.value;
      if(request.password !== request.passwordConfirmation) {
        console.error("Passwords must match!");
        return;
      }
      else if(!request.email.includes('@')) {
        console.error("Invalid e-mail pattern. Try again!");
        return;
      }
      else {
        this.apiService.registerUser(request).subscribe(response => {
          // alert('User registered successfully');
          this.router.navigate(['/registration-response'], {
            queryParams: {
              response: JSON.stringify(response) 
            }
          });
        }, 
        error => {
          alert('Error registering user! Try again!');
          // Dodajte logiku za obradu grešaka
        });
      }
    }
  }
}
