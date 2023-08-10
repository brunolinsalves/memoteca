import { PensamentoService } from './../pensamento.service';
import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-memo',
  templateUrl: './criar-memo.component.html',
  styleUrls: ['./criar-memo.component.css']
})
export class CriarMemoComponent implements OnInit {

  title : string = ''
  default_action_title : string = ''
  editable : boolean = true

  formulario! : FormGroup;

  template_modelo1 = {
    id: 0,
    conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus id arcu ac accumsan. ',
    autoria: 'Lorem ipsum',
    modelo: 'modelo1'
  }

  template_modelo2 = {
    id: 0,
    conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus id arcu ac accumsan. ',
    autoria: 'Lorem ipsum',
    modelo: 'modelo2'
  }

  template_modelo3 = {
    id: 0,
    conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus id arcu ac accumsan. ',
    autoria: 'Lorem ipsum',
    modelo: 'modelo3'
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder : FormBuilder
    ) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      id: 0,
      conteudo: ['', [Validators.required]],
      autoria: ['', [Validators.required]],
      modelo: 'modelo1'
    })

    if ( this.router.url == '/pensamento/create' ) {
      this.title = 'Novo pensamento'
      this.default_action_title = 'Inserir'
    } else {

      const id = Number(this.route.snapshot.paramMap.get('id'))
      this.service.get_pensamento(id).subscribe( (pensamento) => {
        this.formulario.patchValue({
          id: pensamento.id,
          conteudo: pensamento.conteudo,
          autoria: pensamento.autoria,
          modelo: pensamento.modelo
        })
      })

      if ( this.router.url.startsWith('/pensamento/update') ) {
        this.title = 'Alterar pensamento'
        this.default_action_title = 'Alterar'
      } else if ( this.router.url.startsWith('/pensamento/delete') ) {
        this.disable_form_input()
        this.title = 'Deletar pensamento'
        this.default_action_title = 'Deletar'
      }
    }

  }

  operacao_principal(): void {
    if (this.formulario.valid) {
      if ( this.router.url == '/pensamento/create' ) {
        this.service.add(this.formulario.value).subscribe( () => {
          this.router.navigate(['/listarMemos'])
        })
      } else if ( this.router.url.startsWith('/pensamento/update') ) {
        this.service.update(this.formulario.value).subscribe( () => {
          this.router.navigate(['/listarMemos'])
        })
      } else if ( this.router.url.startsWith('/pensamento/delete') ) {
        this.service.delete(this.formulario.value.id ).subscribe( () => {
          this.router.navigate(['/listarMemos'])
        })
      }
    }
  }

  disable_form_input(): void {
    (document.getElementById('memo') as any).disabled = true;
    (document.getElementById('autoria') as any).disabled = true;
    (document.getElementById('modelo1') as any).disabled = true;
    (document.getElementById('modelo2') as any).disabled = true;
    (document.getElementById('modelo3') as any).disabled = true;
  }

}
