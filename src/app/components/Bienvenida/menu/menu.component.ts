import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { NavComponent } from '../../shared/nav/nav.component';

@Component({
  selector: 'app-menu',
  imports: [FooterComponent, NavComponent],
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  started = true
}
