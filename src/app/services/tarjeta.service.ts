import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
private myAppUrl='https://www.beapitarjetacredito.somee.com/'
private myApiUrl='api/tarjeta/'

  constructor(private http:HttpClient) { }

  getListTarjetas(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }
  deleteTarjetas(id:number):Observable<any>{
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }
  saveTarjetas(tarjeta: any):Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, tarjeta);
  }
  updateTarjetas(id:number,tarjeta: any):Observable<any>{
    return this.http.put(this.myAppUrl + this.myApiUrl + id, tarjeta);
  }
}
