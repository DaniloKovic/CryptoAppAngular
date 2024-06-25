import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistrationRequest } from '../models/RegistrationRequest';
import { RegistrationResponse } from '../models/RegistrationResponse';
import { LoginRequest } from '../models/LoginRequest';
import { LoginResponse } from '../models/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://localhost:44337/api'; // bekend API URL-om

  constructor(private httpClient: HttpClient) { }

  // Primer metode za registraciju korisnika
  registerUser(request: RegistrationRequest) : Observable<RegistrationResponse> {
    return this.httpClient.post<RegistrationResponse>(`${this.apiUrl}/User/Registration`, request);
  }

  login(request: LoginRequest) : Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${this.apiUrl}/User/Login`, request);
  }
}
