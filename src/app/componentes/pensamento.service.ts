import { Pensamento } from './pensamento';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly api_url = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient) { }

  get_pensamento(id: number) {
    return this.http.get<Pensamento>(`${this.api_url}/${id}`)
  }

  get_pensamentos() {
    return this.http.get<Pensamento[]>(this.api_url)
  }

  add(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.api_url, pensamento)
  }

  update(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.put<Pensamento>(`${this.api_url}/${pensamento.id}`, pensamento)
  }

  delete (id: number) : Observable<Pensamento> {
    return this.http.delete<Pensamento>(`${this.api_url}/${id}`)
  }

}
