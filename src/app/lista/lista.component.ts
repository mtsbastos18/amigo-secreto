import { Component, OnInit } from '@angular/core';
import { lista } from '../lista.export';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  lista = lista;
  constructor() { }

  ngOnInit(): void {
  }

}
