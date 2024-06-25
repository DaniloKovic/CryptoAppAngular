import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EncryptRequest } from '../models/EncryptRequest';
import { EncryptResponse } from '../models/EncryptResponse';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  private apiUrl = 'https://localhost:44337/api'; // bekend API URL-om

  constructor(private httpClient: HttpClient) { }

  encrypt(request: EncryptRequest) : Observable<EncryptResponse> {
    return this.httpClient.post<EncryptResponse>(`${this.apiUrl}/Crypto/Encrypt`, request);
  }

  loadFileSimulationHistory() : Observable<string> {
    // return this.httpClient.get<string>(`${this.apiUrl}/Crypto/SimulationHistory`); // Ovako ne radi
    return this.httpClient.get(`${this.apiUrl}/Crypto/SimulationHistory`, { responseType: 'text' });
  }
}