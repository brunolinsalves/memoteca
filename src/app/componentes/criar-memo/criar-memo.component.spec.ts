import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarMemoComponent } from './criar-memo.component';

describe('CriarMemoComponent', () => {
  let component: CriarMemoComponent;
  let fixture: ComponentFixture<CriarMemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarMemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarMemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
