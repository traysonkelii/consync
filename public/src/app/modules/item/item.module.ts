import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { ItemComponent } from './components/item/item.component';
import { StoreModule } from '@ngrx/store';
import { itemReducer } from './state/item.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ItemEffects } from './state/item.effects';
import { ItemShellComponent } from './item-shell/item-shell.component';


@NgModule({
  declarations: [ItemComponent, ItemShellComponent],
  imports: [
    CommonModule,
    ItemRoutingModule,
    StoreModule.forFeature('item', itemReducer),
    EffectsModule.forFeature([ItemEffects]),
  ]
})
export class ItemModule { }
