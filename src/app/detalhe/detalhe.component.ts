import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lista } from '../lista.export';
@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss']
})
export class DetalheComponent implements OnInit {
  lista = lista;
  id: number = 0;
  pessoa: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.pessoa = lista.find(x => x.id == this.id);
  }

}
