import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectWackamole, selectGamestate, selectHighscore } from './state/home.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  wackamole$ = this.store.select(selectWackamole)
  gameStarted$ = this.store.select(selectGamestate)
  highscore$ = this.store.select(selectHighscore)
  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

}
