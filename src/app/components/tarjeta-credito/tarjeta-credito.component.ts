import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  form: FormGroup;

  constructor(private fb:FormBuilder) {
    this.form=this.fb.group({
      titular:['', Validators.required],
      numeroTarjeta:['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaExpiracion:['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv:['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]],
    });
   }

  ngOnInit(): void {
  }

  agregarTarjeta(){
    const tarjeta: any={
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value,
    }
    this.listTarjetas.unshift(tarjeta);
    this.form.reset();
  }
}
