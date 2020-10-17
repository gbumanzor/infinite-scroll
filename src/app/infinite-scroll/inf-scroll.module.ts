import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './components/item-list/item-list.component';
import { CardComponent } from './components/card/card.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [ItemListComponent, CardComponent],
  imports: [CommonModule, InfiniteScrollModule],
  exports: [ItemListComponent],
})
export class InfScrollModule {}
