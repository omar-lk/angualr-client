import { Component } from '@angular/core';
import { AnomalieService } from './service/anomalie.service';
import { Projet } from './projet.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  projets: Projet[];
  constructor(private anomalieservice: AnomalieService) {}

  ngOnInit() {
    return this.anomalieservice
      .getData()
      .subscribe((data) => (this.projets = data));
  }
}
