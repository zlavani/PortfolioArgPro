import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.css']
})
export class LogrosComponent implements OnInit {
  logrosList: any;
  faTimes = faTimes;
  constructor(private datosPorfolio: PortfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      this.logrosList = data.logros;
    });
  }

  onDelete(){
    console.log("Delete" )
  }
  toggleAddTask(){
    console.log
  }

}
