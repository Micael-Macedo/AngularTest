import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './directives/highlight.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularTest';
}
