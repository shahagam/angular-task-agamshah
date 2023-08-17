import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetprobatchComponent } from './getprobatch.component';

describe('GetprobatchComponent', () => {
  let component: GetprobatchComponent;
  let fixture: ComponentFixture<GetprobatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetprobatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetprobatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
