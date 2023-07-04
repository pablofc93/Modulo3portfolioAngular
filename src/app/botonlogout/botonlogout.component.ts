import { Component } from '@angular/core';
import { DatosportfolioService } from '../services/datosportfolio.service'; //se importa el servicio

@Component({
  selector: 'app-botonlogout',
  templateUrl: './botonlogout.component.html',
  styleUrls: ['./botonlogout.component.css']
})
export class BotonlogoutComponent {
  //crea una variable de instancia para almacenar los datos con los que trata el Servicio
  botones: any=[];

  //inyectar el servicio para tener acceso en la clase a los métodos 
  //private portfolioservice: DatosportfolioService
  //todo esto es dentro del constructor.
  constructor(private portfolioService: DatosportfolioService){ //fijarse si el primer service es con 's' o 'S'

  }

  ngOnInit(): void{
    //Esto es almacenar en la variable de instancia 
    this.portfolioService.getDatos().subscribe(portfolio=>{
      console.log(portfolio);
      this.botones=portfolio.botones;
    })
  }
}
