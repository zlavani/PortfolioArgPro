import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Logro } from 'src/app/Logro';
import { UiService } from 'src/app/servicios/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Logro[] = [];
  showAddLogro: boolean = false;
  subscription?: Subscription;


  constructor(
    private portfolioService: PortfolioService,
    private uiService: UiService,
    private router: Router
  
    ) {
      this.subscription = this.uiService.onToggle().subscribe(value => this.showAddLogro = value)

     }
  

  ngOnInit(): void {
    this.portfolioService.getLogros().subscribe((logros) => {
      this.proyectos = logros;});
  }
  toggleAddLogro() {
    this.uiService.toggleAddLogro();
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
