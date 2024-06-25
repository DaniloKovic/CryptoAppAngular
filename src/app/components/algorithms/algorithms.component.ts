import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CryptoService } from '../../services/crypto.service';
import { EncryptRequest } from '../../models/EncryptRequest';
import { CryptoAlgorithms } from '../../models/CryptoAlgorithms';

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrl: './algorithms.component.scss'
})
export class AlgorithmsComponent {
  algorithmForm: FormGroup;
  encryptedText: string = '';

  algorithms = [
    { value: CryptoAlgorithms.RailFence, viewValue: 'Rail Fence' },
    { value: CryptoAlgorithms.Myszkowski, viewValue: 'Myszkowski' },
    { value: CryptoAlgorithms.Playfair, viewValue: 'Playfair' }
  ];

  constructor(private fb: FormBuilder,
              private cryptoService: CryptoService,
              private http: HttpClient, 
              private router: Router) 
  {
    this.algorithmForm = this.fb.group({
      plainText: ['', [Validators.required, Validators.maxLength(100)]],
      algorithm: ['', Validators.required],
      key: ['', Validators.required]
    });
  }


  onSubmit() {
    if (this.algorithmForm.valid) {
      const request: EncryptRequest = this.algorithmForm.value;

      let req: EncryptRequest = {
        plainText: this.algorithmForm.get('plainText')?.value,
        algorithm: this.algorithmForm.get('algorithm')?.value,
        key: this.algorithmForm.get('key')?.value
      }

      this.cryptoService.encrypt(request).subscribe(
        response => {
          this.encryptedText = response.encryptedText;
        },
        error => {
          console.error('Encryption failed', error);
        }
      )
    }
  }
  
  showAlgorithmSimulationFileContent() {
    this.router.navigate(['/file-content']);
  }
}
