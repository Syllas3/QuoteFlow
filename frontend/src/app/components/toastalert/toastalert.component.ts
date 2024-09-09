import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toastalert',
  standalone: true,
  imports: [],
  templateUrl: './toastalert.component.html',
  styleUrl: './toastalert.component.css',
})
export class ToastalertComponent {
  constructor(private toastr: ToastrService) {}

  showSucess() {
    this.toastr.success('Enviada com sucesso!', 'Sucesso!', {
      positionClass: 'toast-top-right', // Ajuste a posição conforme necessário
    });
  }
}
