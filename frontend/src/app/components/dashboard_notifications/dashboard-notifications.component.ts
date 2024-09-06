import { Component, OnInit, ElementRef } from '@angular/core';
import { SidebarDashboardComponent } from '../sidebar_dashboard/sidebar-dashboard.component';
import { NotificationsFormComponent } from '../notifications_form/notifications-form.component';

@Component({
  selector: 'app-dashboard-notifications',
  standalone: true,
  imports: [SidebarDashboardComponent, NotificationsFormComponent],
  templateUrl: './dashboard-notifications.component.html',
  styleUrls: ['./dashboard-notifications.component.css'],
})
export class DashboardNotificationsComponent implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    // Verifica se o modal já foi exibido
    const hasModalShown = localStorage.getItem('modalShown');

    if (!hasModalShown) {
      // Se o modal ainda não foi exibido, obtém o elemento modal
      const modalElement = this.el.nativeElement.querySelector(
        '#modalNotifications'
      );

      // Inicializa o modal do Bootstrap
      const modal = (window as any).bootstrap.Modal.getOrCreateInstance(
        modalElement
      );

      // Exibe o modal
      modal.show();

      // Salva no localStorage que o modal foi exibido
      localStorage.setItem('modalShown', 'true');
    }
  }
}
