import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notifications-form',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './notifications-form.component.html',
})
export class NotificationsFormComponent {
  User: string = "Lucas";

  Notifications: Array<string> = [
    "Para realizar cotações em nosso sistema, primeiro é necessário cadastrar o seu CNPJ no seu perfil.",
    "Para2 realizar2 cotações2 em2 nosso2 sistema2, primeiro2 é2 necessário2 cadastrar2 o2 seu2 CNPJ2 no2 seu2 perfil2."
  ];
}
