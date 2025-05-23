import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { NavigateComponent } from "./components/shared/navigate/navigate.component";


@Component({
  selector: 'app-root',
  imports: [NavigateComponent, RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  started = true
}
