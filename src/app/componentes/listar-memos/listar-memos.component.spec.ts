import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMemosComponent } from './listar-memos.component';

describe('ListarMemosComponent', () => {
  let component: ListarMemosComponent;
  let fixture: ComponentFixture<ListarMemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarMemosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarMemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
