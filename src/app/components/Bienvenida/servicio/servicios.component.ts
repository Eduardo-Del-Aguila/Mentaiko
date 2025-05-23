import { Component } from '@angular/core';
import { Servicio, ServiciosService } from '../../../services/servicios.service';
import { NavComponent } from '../../shared/nav/nav.component';


@Component({
  selector: 'app-servicios',
  imports: [NavComponent],
  templateUrl: './servicios.component.html'
})
export class ServiciosComponent {

  misServicios:Servicio[]=[];

  constructor(private servicio:ServiciosService){
    this.misServicios = this.servicio.getServicio()
  }
}
