import { Component } from '@angular/core';
import { SidebarDashboardComponent } from "../sidebar_dashboard/sidebar-dashboard.component";
import { NotificationsFormComponent } from "../notifications_form/notifications-form.component";

@Component({
  selector: 'app-dashboard-notifications',
  standalone: true,
  imports: [SidebarDashboardComponent, NotificationsFormComponent],
  templateUrl: './dashboard-notifications.component.html',
  styleUrl: './dashboard-notifications.component.css'
})
export class DashboardNotificationsComponent {

}
