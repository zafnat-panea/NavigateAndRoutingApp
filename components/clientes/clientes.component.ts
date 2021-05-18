import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements OnInit {


  clientes: string[] = ["Cliente1","Cliente2","Cliente3","Cliente4","Cliente5"];

  constructor(private router:Router) { }

  ngOnInit() {}

  volverAtras(){
    this.router.navigate(["/tabs/tab1"]);
  }

  editar(cliente){
    this.router.navigate(["/tabs/tab1/clientes",cliente]);
  }
}
