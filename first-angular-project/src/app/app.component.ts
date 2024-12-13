import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { LearningCSSBindingComponent } from './learning-css-binding/learning-css-binding.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AppNavbar,
    HeaderComponent,
    LearningCSSBindingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'first-angular-project';
  num: number = 123;
}
