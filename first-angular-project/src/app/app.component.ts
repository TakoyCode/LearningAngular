import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppNavbar, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'first-angular-project';
  num: number = 123;
  imgURL: string = 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-happy-cone-800x525.jpg';
  isDisabled: boolean = true;
  isActive: boolean = true;
  borderColor: string = "red";
  fruitName: string = "banana"
}
