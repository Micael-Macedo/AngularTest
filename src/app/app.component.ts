import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './directives/highlight.directive';
import { LabelComponent } from "./label/label.component";
import { AsyncCompComponent } from "./async-comp/async-comp.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HighlightDirective, LabelComponent, AsyncCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularTest';
}
