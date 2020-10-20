import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiccioComponent } from './ciccio.component';

describe('CiccioComponent', () => {
  let component: CiccioComponent;
  let fixture: ComponentFixture<CiccioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiccioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiccioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
