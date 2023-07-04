//creamos el primer servicio, lo que va a hacer un servicio es traer datos de un JSON.
//siempre vamos a trabajar con el archivo ts de color azul, el naranja es de testeo, ese no lo usamos.

import { Injectable } from '@angular/core';
//esto es para suscribirse y que reciba respuesta de forma aincrónica. 
import { Observable } from 'rxjs';

//esto es para hacer peticiones
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosportfolioService {

  //el primer http se llama 'alias'
  constructor(private http:HttpClient) { }

  //método observable que devuelve los datos
  getDatos():Observable<any>{
    //Se llama al JSON con su path -ruta- o bien, en su lugar se puede obtener una URL para traer  datos
    //de un JSON que está online.
    return this.http.get('./assets/json/datosportfolio.json');
  }
}
