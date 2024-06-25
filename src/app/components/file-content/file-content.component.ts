import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-content',
  templateUrl: './file-content.component.html',
  styleUrl: './file-content.component.scss'
})
export class FileContentComponent implements OnInit {

  simulationHistoryContent?: string;

  constructor(private http: HttpClient,
              private cryptoService: CryptoService,
              private router: Router) { }

  ngOnInit(): void {
    this.loadSimulationHistory();
  }

  loadSimulationHistory(): void {
    // Pretpostavljamo da API vraća sadržaj datoteke kao string
    this.cryptoService.loadFileSimulationHistory().subscribe({
      next: (response) => {
        this.simulationHistoryContent = response;
        if(!response || response.trim().length === 0){
          this.simulationHistoryContent = "Empty file"
        }
      },
      error: (error) => {
        console.error('Error while trying to load simulation history', error);
      }
    });
  }

  goBack() {
    this.router.navigate(['/algorithms']);
  }
}
