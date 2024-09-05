import { Component } from '@angular/core';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-profile-form',
  standalone: true,
  imports: [NgxMaskDirective, NgxMaskPipe],
  templateUrl: './profile-form.component.html',
  styleUrl: './profile-form.component.css',
})
export class ProfileFormComponent {}
