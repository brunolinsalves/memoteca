import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarMemoComponent } from './componentes/criar-memo/criar-memo.component';
import { ListarMemosComponent } from './componentes/listar-memos/listar-memos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarMemos',
    pathMatch: 'full'
  },
  {
    path: 'criarMemo',
    component: CriarMemoComponent
  },
  {
    path: 'listarMemos',
    component: ListarMemosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
