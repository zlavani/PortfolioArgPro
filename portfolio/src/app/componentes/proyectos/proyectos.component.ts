import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Logro } from 'src/app/Logro';
 
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Logro[] = [];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getLogros().subscribe((logros) => {
      this.proyectos = logros;});
  }
  toggleAddTask() {
    console.log
  }
  
  deleteLogro(logro:Logro){
    this.portfolioService.deleteLogro(logro)
      .subscribe(
        () => (
          this.proyectos = this.proyectos.filter((t) => {
              return t.id !== logro.id
          })
      )) 
  }
  addLogro(logro: Logro) {
    console.log(logro)
    this.portfolioService.addLogro(logro).subscribe((logro) =>
      this.proyectos.push(logro))
  } 

}
