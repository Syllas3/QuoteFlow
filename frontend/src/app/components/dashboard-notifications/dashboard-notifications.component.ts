import { Component } from '@angular/core';
import { SidebarDashboardComponent } from "../sidebar_dashboard/sidebar-dashboard.component";

@Component({
  selector: 'app-dashboard-notifications',
  standalone: true,
  imports: [SidebarDashboardComponent],
  templateUrl: './dashboard-notifications.component.html',
  styleUrl: './dashboard-notifications.component.css'
})
export class DashboardNotificationsComponent {

}
