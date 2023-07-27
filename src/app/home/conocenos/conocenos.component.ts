import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-conocenos',
  templateUrl: './conocenos.component.html',
  styleUrls: ['./conocenos.component.css']  
})
export class ConocenosComponent {
anios!: number;
proyectos!: number;
clientes!: number;
n = 0;
  ngOnInit(): void {

    // Use Angular's interval observable instead of window.setInterval
    interval(60).subscribe(() => {
      if (this.anios != 20) {
        this.anios = this.n;
      }
      if (this.clientes != 120) {
        this.clientes = this.n;
      }
      if (this.proyectos != 250) {
        this.proyectos = this.n;
      }
      this.n++;

    });
  }
}
