import { Component } from '@angular/core';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-form-dashboard',
  standalone: true,
  imports: [NgxMaskDirective, NgxMaskPipe],
  templateUrl: './form-dashboard.component.html',
})
export class FormDashboardComponent {}
