import {
  Component,
  inputBinding,
  outputBinding,
  signal,
  Type,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Animals } from '@angular-dynamic-components/animals';
import { Fruits } from '@angular-dynamic-components/fruits';

interface ComponentOption {
  id: string;
  label: string;
  component: Type<unknown>;
}

@Component({
  imports: [FormsModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  componentTitle = signal('Component preview');
  selectedComponent = signal('animals');
  increments = signal(0);

  hasLoadedComponent = false;

  componentOptions: ComponentOption[] = [
    {
      id: 'animals',
      label: 'Animals',
      component: Animals,
    },
    {
      id: 'fruits',
      label: 'Fruits',
      component: Fruits,
    },
  ];

  vcr = viewChild.required('componentHost', { read: ViewContainerRef });

  loadComponent(): void {
    const selectedOption =
      this.componentOptions.find(
        (option) => option.id === this.selectedComponent(),
      ) ?? this.componentOptions[0];

    this.vcr().clear();
    this.vcr().createComponent(selectedOption.component, {
      bindings: [
        inputBinding('title', this.componentTitle),
        outputBinding('increment', () =>
          this.increments.update((count) => count + 1),
        ),
      ],
    });
    this.hasLoadedComponent = true;
  }
}
