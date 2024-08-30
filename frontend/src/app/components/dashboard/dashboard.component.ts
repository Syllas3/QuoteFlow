import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarDashboardComponent } from '../sidebar_dashboard/sidebar-dashboard.component';
import { FormDashboardComponent } from '../form_dashboard/form-dashboard.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, SidebarDashboardComponent, FormDashboardComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {}
