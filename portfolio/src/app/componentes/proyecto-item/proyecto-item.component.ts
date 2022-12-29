import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { LOGROS } from 'src/app/mock-logros';
import { Logro } from 'src/app/Logro';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-proyecto-item',
  templateUrl: './proyecto-item.component.html',
  styleUrls: ['./proyecto-item.component.css']
})
export class ProyectoItemComponent implements OnInit {
  @Input() proyecto: Logro=LOGROS[0]
  @Output() onDeleteLogro:EventEmitter<Logro> = new EventEmitter()
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }
  onDelete(proyecto: Logro) {
    console.log(proyecto)
    this.onDeleteLogro.emit(proyecto);
  }
  toggleAddTask() {
    console.log("Delete")
  }

}
