import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getDisplayNav, HomeBaseState } from 'src/app/modules/home/state/home.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store<HomeBaseState>) { }

  show: boolean = true;

  ngOnInit(): void {
    /**
     * TODO unsubscribe
     */
    this.store.select(getDisplayNav).subscribe(
      displayNav => this.show = displayNav
    )
  }

}
