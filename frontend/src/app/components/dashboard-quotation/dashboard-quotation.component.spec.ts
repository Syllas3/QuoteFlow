import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardQuotationComponent } from './dashboard-quotation.component';

describe('DashboardQuotationComponent', () => {
  let component: DashboardQuotationComponent;
  let fixture: ComponentFixture<DashboardQuotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardQuotationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
