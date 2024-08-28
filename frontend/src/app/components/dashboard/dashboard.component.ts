import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarDashboardComponent } from '../sidebar_dashboard/sidebar-dashboard.component';
import { TableDashboardComponent } from '../table_dashboard/table-dashboard.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, SidebarDashboardComponent, TableDashboardComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {}
