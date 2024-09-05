import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notifications-form',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './notifications-form.component.html',
})
export class NotificationsFormComponent {
  User: String = "Lucas";

  Notifications1: Array[] = "Estamos felizes em tê-lo conosco! Se você está lendo esta mensagem,
          desejamos que aproveite ao máximo nosso sistema de cotação."
  Notifications2: Array[]: 
}
