import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes-info',
  templateUrl: './clientes-info.component.html',
  styleUrls: ['./clientes-info.component.scss'],
})
export class ClientesInfoComponent implements OnInit {

  cliente: string;

  constructor(private router: Router,private route: ActivatedRoute) {}

  ngOnInit() {
    this.cliente = this.route.snapshot.paramMap.get("cliente");
  }

  volverAtras(){
    this.router.navigate(["/tabs/tab1/clientes"]);
  }

  home(){
    this.router.navigate(["/tabs/tab1"]);
  }
}
