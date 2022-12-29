import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Logro } from 'src/app/Logro';

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.css']
})
export class AgregarProyectoComponent implements OnInit {
  @Output() onAddLogro : EventEmitter<Logro> = new EventEmitter();
  figura:string= "";
  numero: string= "";
  titulo: string= "";
  titulo2: string= "";
  descrip: string= "";
  
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.titulo.length === 0) {
      alert("Por favor agregar correctamente los valores pedidos");
      return
    }
    const { titulo, titulo2, descrip, figura, numero } = this
    const newLogro = { titulo, titulo2, descrip, figura,numero }
    this.onAddLogro.emit(newLogro);
  }

}
