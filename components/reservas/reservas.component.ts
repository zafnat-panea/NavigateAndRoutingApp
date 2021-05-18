import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss'],
})
export class ReservasComponent implements OnInit {

  reservas: string[] = ["Reserva1","Reserva2","Reserva3","Reserva4","Reserva5"];

  constructor(private router: Router) { }

  ngOnInit() {}

  volverAtras(){
    this.router.navigate(["/tabs/tab2"]);
  }
}
