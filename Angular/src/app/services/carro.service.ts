import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro } from '../models/carro';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  http = inject(HttpClient);

  API = "http://localhost:8080/api/carro"

  constructor() { }

  findAll(): Observable<Carro[]>
  {
    return this.http.get<Carro[]>(this.API+"");
  }

  delete(id : number): Observable<String>
  {
    return this.http.delete<String>(this.API+"/"+id, {responseType: 'text' as 'json'});
  }

  salvar(carro : Carro): Observable<String>
  {
    return this.http.post<String>(this.API+"", carro, {responseType: 'text' as 'json'});
  }

  atualizar(carro : Carro, id : number): Observable<String>
  {
    return this.http.put<String>(this.API+"/"+id, carro,  {responseType: 'text' as 'json'});
  }

  findById(id : number): Observable<Carro>
  {
    return this.http.get<Carro>(this.API+"/"+id);
  }



}
