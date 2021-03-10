import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getSelectedItem, ItemState } from '../state/item.reducer';
import * as ItemActions from './../state/item.action';

@Component({
  selector: 'app-item-shell',
  templateUrl: './item-shell.component.html',
})
export class ItemShellComponent implements OnInit {


  constructor(
    private route: ActivatedRoute,
    private store: Store<ItemState>
  ) { }

  id!: string | null;
  item$: any;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) {
      this.store.dispatch(ItemActions.getItemData({itemId: this.id}));
      this.item$ = this.store.select(getSelectedItem);
    }
  }

}
