import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectWhackamole, selectGamestate, selectHighscore, selectCurrentScore, selectTimer } from './state/home.selectors';
import { homeActionsDecreaseTimer, homeActionsGenerateMole, homeActionsToggleGame, homeActionsWhackamole } from './state/home.actions';
import {HomeService} from './service/home.service'
import { interval, Observable, switchMap, take } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  whackamole$ = this.store.select(selectWhackamole)
  gameStarted$ = this.store.select(selectGamestate)
  highscore$ = this.store.select(selectHighscore)
  currentScore$ = this.store.select(selectCurrentScore)
  timer$ = this.store.select(selectTimer)
  interval$: any;
  constructor(
    private store: Store,
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
  }

  startGame(){
    this.store.dispatch(homeActionsToggleGame({ gameState: true}));
    this.createMole();
    this.interval$ = interval(1000);
    const subscriptionInterval = this.interval$.subscribe(() => {
      this.store.dispatch(homeActionsDecreaseTimer());
    })
    setTimeout(() => {
      this.store.dispatch(homeActionsToggleGame({ gameState: false}));
      subscriptionInterval.unsubscribe();
    }, 30000);
  }

  createMole(){
    let time = this.homeService.getArbitraryNumber(1000, 3000);
    this.store.dispatch(homeActionsGenerateMole());
    setTimeout(async () => {
      let gameState = await this.store.pipe(select(selectGamestate),take(1)).toPromise();
      if(gameState){
        this.createMole();
      }
    }, time);
  }

  whackedTheMole(id: string){
    this.store.dispatch(homeActionsWhackamole({ id }));
  }
}
