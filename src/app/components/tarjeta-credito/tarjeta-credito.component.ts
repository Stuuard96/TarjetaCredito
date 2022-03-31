import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {
  listTarjetas: any[]=[
    {titular: 'Juan Perez',  numeroTarjeta: '2532423432432', fechaExpiracion: '11/12', cvv:'123'},
    {titular: 'Ana Silva',  numeroTarjeta: '1231231232432', fechaExpiracion: '12/12', cvv:'321'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
