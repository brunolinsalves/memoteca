import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-listar-memos',
  templateUrl: './listar-memos.component.html',
  styleUrls: ['./listar-memos.component.css']
})
export class ListarMemosComponent implements OnInit {

  listaPensamentos : Pensamento[] = [];

  filtro : string = ''

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.get_pensamentos().subscribe( (listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    } )
  }

  pesquisar(): void {
    this.service.get_pensamentos_by_conteudo(this.filtro).subscribe( (listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }

}
