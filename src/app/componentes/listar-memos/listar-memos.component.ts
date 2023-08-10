import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-listar-memos',
  templateUrl: './listar-memos.component.html',
  styleUrls: ['./listar-memos.component.css']
})
export class ListarMemosComponent implements OnInit {

  listaPensamentos : Pensamento[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
