import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdUpdateComponent } from './prod-update.component';

describe('ProdUpdateComponent', () => {
  let component: ProdUpdateComponent;
  let fixture: ComponentFixture<ProdUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
