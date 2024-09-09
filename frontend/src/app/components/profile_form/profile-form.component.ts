import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-profile-form',
  standalone: true,
  imports: [NgxMaskDirective, NgxMaskPipe, CommonModule],
  templateUrl: './profile-form.component.html',
  styleUrl: './profile-form.component.css',
})
export class ProfileFormComponent {
  showNotificationAlert: boolean;

  constructor() {
    const notificationProfilePage = localStorage.getItem(
      'notificationProfilePage'
    );
    this.showNotificationAlert = !notificationProfilePage;
  }

  // Função de fechar o alerta
  closeButton() {
    this.showNotificationAlert = false;
    localStorage.setItem('notificationProfilePage', String(true));
  }
}
