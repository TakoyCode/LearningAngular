import { Component } from '@angular/core';

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
}
