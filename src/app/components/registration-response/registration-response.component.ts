import { Component, OnInit } from '@angular/core';
import { RegistrationResponse } from '../../models/RegistrationResponse';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration-response',
  templateUrl: './registration-response.component.html',
  styleUrl: './registration-response.component.scss'
})
export class RegistrationResponseComponent implements OnInit {
  registrationResponse!: RegistrationResponse; // Koristimo ! da označimo da će ova promenljiva biti inicijalizovana putem Input

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.registrationResponse = JSON.parse(params['response']);
    });
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
}
