import { Component, input, output } from '@angular/core';

@Component({
  selector: 'lib-fruits',
  imports: [],
  templateUrl: './fruits.html',
  host: {
    '[class.preview-component]': 'true',
  },
})
export class Fruits {
  title = input('');
  increment = output();
}
