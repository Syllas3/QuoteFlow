import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-notifications-form',
  standalone: true,
  imports: [CommonModule, RouterModule, ModalComponent],
  templateUrl: './notifications-form.component.html',
})
export class NotificationsFormComponent {
  showNotificationAlert: boolean;
  User: string = 'Lucas'; // Nome do usuário

  // Definir as datas e as notificações
  Dates: Array<string> = ['05/09/2024', '06/09/2024', '00/00/0000'];

  Notifications: Array<string> = [
    'Para realizar cotações em nosso sistema, primeiro é necessário cadastrar o seu CNPJ no seu perfil.',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est modi inventore libero nisi sunt rem nemo quaerat velit. Expedita, ab impedit dolorum rem a adipisci magni minus mollitia nam maxime!',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est modi inventore libero nisi sunt rem nemo quaerat velit. Expedita, ab impedit dolorum rem a adipisci magni minus mollitia nam maxime! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est modi inventore libero nisi sunt rem nemo quaerat velit. Expedita, ab impedit dolorum rem a adipisci magni minus mollitia nam maxime!',
  ];

  constructor() {
    const notificationClosed = localStorage.getItem('notificationClosed');
    this.showNotificationAlert = !notificationClosed;
  }

  // Função de fechar o alerta
  closeButton() {
    this.showNotificationAlert = false;
    localStorage.setItem('notificationClosed', 'true');
  }
}
