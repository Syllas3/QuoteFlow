import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import bootstrap from 'bootstrap';

@Component({
  selector: 'app-notifications-form',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './notifications-form.component.html',
})
export class NotificationsFormComponent implements AfterViewInit {
  showNotificationAlert: boolean;
  User: string = 'Lucas';

  Dates: Array<string> = ['05/09/2024', '06/09/2024'];

  Notifications: Array<string> = [
    'Para realizar cotações em nosso sistema, primeiro é necessário cadastrar o seu CNPJ no seu perfil.',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est modi inventore libero nisi sunt rem nemo quaerat velit. Expedita, ab impedit dolorum rem a adipisci magni minus mollitia nam maxime!',
  ];

  constructor() {
    const notificationClosed = localStorage.getItem('notificationClosed');
    this.showNotificationAlert = !notificationClosed;
  }

  // Função chamada após a view ser inicializada
  ngAfterViewInit() {
    // Exibir o modal após a view ser carregada
    const myModal = new bootstrap.Modal(
      document.getElementById('welcomeModal')!
    );
    myModal.show();
  }

  closeButton() {
    this.showNotificationAlert = false;
    localStorage.setItem('notificationClosed', 'true');
  }
}
