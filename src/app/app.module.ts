import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { ListarMemosComponent } from './componentes/listar-memos/listar-memos.component';
import { CriarMemoComponent } from './componentes/criar-memo/criar-memo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PensamentoComponent } from './componentes/pensamento/pensamento.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    ListarMemosComponent,
    CriarMemoComponent,
    PensamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
