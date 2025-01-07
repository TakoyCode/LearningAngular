import { Component } from '@angular/core';
import { EventType } from '@angular/router';

@Component({
  selector: 'app-learning-css-binding',
  imports: [],
  templateUrl: './learning-css-binding.component.html',
  styleUrl: './learning-css-binding.component.css',
})
export class LearningCSSBindingComponent {
  imgURL: string =
    'https://gratisography.com/wp-content/uploads/2024/10/gratisography-happy-cone-800x525.jpg';
  isDisabled: boolean = true;
  isActive: boolean = true;
  borderColor: string = 'red';
  fruitName: string = 'banana';

  buttonClick() {
    console.log('Clicked');
  }

  buttonHover() {
    console.log('Hovered');
  }

  keyPressed() {
    console.log('Key entered');
  }

  keyEnterPressed(event: any) {
    if (event.keyCode === 13) {
      console.log('Enter Key Pressed');
    }
  }

  keyupFiltering() {
    console.log('Keyup event filtering');
  }
}
