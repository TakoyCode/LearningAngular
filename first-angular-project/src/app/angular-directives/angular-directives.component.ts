import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-directives',
  imports: [NgIf],
  templateUrl: './angular-directives.component.html',
  styleUrl: './angular-directives.component.css',
})
export class AngularDirectivesComponent {
  isLoggedIn: boolean = false;
  userName: string = 'John Doe';
}
