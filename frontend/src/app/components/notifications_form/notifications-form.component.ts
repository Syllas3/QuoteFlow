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
}
