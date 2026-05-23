import { Component, input, output } from '@angular/core';

@Component({
  selector: 'lib-animals',
  imports: [],
  templateUrl: './animals.html',
  host: {
    '[class.preview-component]': 'true',
  },
})
export class Animals {
  title = input('');
  increment = output();
}
