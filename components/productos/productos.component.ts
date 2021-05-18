import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})



export class ProductosComponent implements OnInit {

  productos: string[] = ["Producto1","Producto2","Producto3","Producto4","Producto5"];

  constructor(private router:Router) { }

  ngOnInit() {}

  volverAtras(){
    this.router.navigate(["/tabs/tab3"]);
  }
}
