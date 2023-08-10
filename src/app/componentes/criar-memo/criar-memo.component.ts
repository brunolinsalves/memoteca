import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-criar-memo',
  templateUrl: './criar-memo.component.html',
  styleUrls: ['./criar-memo.component.css']
})
export class CriarMemoComponent implements OnInit {

  pensamento : Pensamento = {
    id: 1,
    conteudo: 'Isso é o conteudo',
    autoria: 'Dev'
  }

  constructor() { }

  ngOnInit(): void {
  }

  criar_memo(): void {
    console.log(this.pensamento)
  }

}
