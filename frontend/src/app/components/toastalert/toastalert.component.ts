import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatcARDmOD}

@Component({
  selector: 'app-toastalert',
  standalone: true,
  imports: [],
  templateUrl: './toastalert.component.html',
  styleUrl: './toastalert.component.css',
})
export class ToastalertComponent {
  constructor(private toastr: ToastrService) {

  }

  showSucess() {
    this.toastr.success("Enviada com sucesso!", "Sucesso!", {})
  }
}
