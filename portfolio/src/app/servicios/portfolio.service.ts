import { HttpClient,HttpHandler  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { LOGROS } from 'src/app/mock-logros';
import { Logro } from 'src/app/Logro';


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
}
 