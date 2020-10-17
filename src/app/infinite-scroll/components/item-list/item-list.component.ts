import { Component } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent {
  scrollThrottle = 2500;
  theArray: { id: number; value: string | number }[] = [];

  constructor() {
    this.addToArray(10);
  }

  private addToArray(items: number): void {
    range(1, items).forEach((value) => {
      this.theArray.push({ id: this.theArray.length + 1, value });
    });
  }

  nextPage(): void {
    console.log('scrolled');
    this.addToArray(10);
  }
}
