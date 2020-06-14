import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apiconsumo',
  templateUrl: './apiconsumo.component.html',
  styleUrls: ['./apiconsumo.component.css']
})
export class ApiconsumoComponent implements OnInit {

  public miniDescripcion: string = "Este es un curso del cual podras obtener muchos conociminetos para tu desarrollo profesional, asi como las tecnologias requeridas para comenzar a programar.";

  constructor() { }

  ngOnInit(): void {
    
  }

}
