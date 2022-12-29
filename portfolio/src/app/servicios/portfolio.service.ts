import { HttpClient, HttpHandler, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { LOGROS } from 'src/app/mock-logros';
import { Logro } from 'src/app/Logro';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = 'http://localhost:5001/logros'
  constructor(private http:HttpClient ) { }

  obtenerDatos():Observable<any>{
    return this.http.get('./assets/data/data.json');
  }
  getLogros(): Observable<Logro[]>{
    const logros = of(LOGROS);
    return this.http.get<Logro[]>(this.apiUrl) 
  }

  deleteLogro(logro:Logro):Observable<Logro>{
    const url = `${this.apiUrl}/${logro.id}`
    return this.http.get<Logro>(url)
  }

  addLogro(logro: Logro): Observable<Logro> {
    return this.http.post<Logro>(this.apiUrl,logro, httpOptions)

  }
}
 