import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsLayoutComponent } from './produits-layout.component';

describe('ProduitsLayoutComponent', () => {
  let component: ProduitsLayoutComponent;
  let fixture: ComponentFixture<ProduitsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitsLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
