import { Component } from '@angular/core';
import { DatosportfolioService } from '../services/datosportfolio.service'; //se importa el servicio

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  //crea una variable de instancia para almacenar los datos con los que trata el Servicio
  educacion: any=[];
  cursos: any=[];

  //inyectar el servicio para tener acceso en la clase a los métodos 
  //private portfolioservice: DatosportfolioService
  //todo esto es dentro del constructor.
  constructor(private portfolioService: DatosportfolioService){ //fijarse si el primer service es con 's' o 'S'

  }

  ngOnInit(): void{
    //Esto es almacenar en la variable de instancia 
    this.portfolioService.getDatos().subscribe(portfolio=>{
      console.log(portfolio);
      this.educacion=portfolio.educacion;
      this.cursos=portfolio.cursos;
    })
  }
}
