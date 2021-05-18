import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ReservasComponent } from '../components/reservas/reservas.component';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router) {}

  goToReservas(){
    //this.router.navigateByUrl(`tabs/tab2/reservas/${pepe}`);
    //this.router.navigateByUrl(`tabs/tab2/reservas/${pepe}`);
    this.router.navigate(["tabs/tab2/reservas"]);
    //this.router.navigate(["tabs/tab2/reservas",pepe]);
  }
}
