import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PratoCadastroComponent } from './prato-cadastro.component';

describe('PratoCadastroComponent', () => {
  let component: PratoCadastroComponent;
  let fixture: ComponentFixture<PratoCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PratoCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PratoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
