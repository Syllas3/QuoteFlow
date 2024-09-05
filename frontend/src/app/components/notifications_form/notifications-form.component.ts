import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notifications-form', // Define o seletor do componente
  standalone: true, // Define que este é um componente autônomo (standalone)
  imports: [CommonModule, RouterModule], // Importa os módulos necessários (CommonModule e RouterModule)
  templateUrl: './notifications-form.component.html', // Caminho do arquivo de template HTML
})
export class NotificationsFormComponent {
  showNotificationAlert: boolean;

  constructor() {
    // Verifica se a notificação já foi fechada anteriormente
    const notificationClosed = localStorage.getItem('notificationClosed');
    this.showNotificationAlert = !notificationClosed; // Mostra a notificação se ela não foi fechada
  }

  // Função chamada quando o botão de fechar alerta é clicado
  closeButton() {
    this.showNotificationAlert = false; // Esconde o alerta ao definir a variável como falsa
    localStorage.setItem('notificationClosed', 'true'); // Armazena a informação de que a notificação foi fechada
  }

  User: string = 'Lucas'; // Armazena o nome do usuário para exibição personalizada

  // Array de notificações que são exibidas na interface
  Notifications: Array<string> = [
    'Para realizar cotações em nosso sistema, primeiro é necessário cadastrar o seu CNPJ no seu perfil.',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est modi inventore libero nisi sunt rem nemo quaerat velit. Expedita, ab impedit dolorum rem a adipisci magni minus mollitia nam maxime!',
  ];
}
