import { Component } from '@angular/core';
import { DatosportfolioService } from '../services/datosportfolio.service'; //se importa el servicio

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  imagenLogo: string='';

  constructor(private portfolioService: DatosportfolioService){

  }

  ngOnInit(): void{
    //Esto es almacenar en la variable de instancia 
    this.portfolioService.getDatos().subscribe(portfolio=>{
      this.imagenLogo = portfolio.imagenLogo;
    })
  }

}
