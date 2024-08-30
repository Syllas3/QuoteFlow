import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './sidebar-dashboard.component.html',
  styleUrls: ['./sidebar-dashboard.component.css'],
})
export class SidebarDashboardComponent {
  isExpanded = false;

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }
}
