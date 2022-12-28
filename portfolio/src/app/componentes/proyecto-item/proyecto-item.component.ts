import { Component, OnInit, Input } from '@angular/core';
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
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }
  onDelete() {
    console.log("Delete")
  }
  toggleAddTask() {
    console.log
  }

}
