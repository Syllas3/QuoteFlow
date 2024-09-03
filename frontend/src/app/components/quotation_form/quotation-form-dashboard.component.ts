import { Component } from '@angular/core';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-quotation-form-dashboard',
  standalone: true,
  imports: [NgxMaskDirective, NgxMaskPipe],
  templateUrl: './quotation-form-dashboard.component.html',
})
export class FormDashboardComponent {}
