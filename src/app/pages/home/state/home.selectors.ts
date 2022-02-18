import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Whackamole } from '../models/whackamole.model';
import { HomeState } from './home.reducer';

export const selectHomeState = createFeatureSelector<HomeState>('home')

export const selectWhackamole = createSelector(
    selectHomeState,
    (homeState: HomeState) => {
        return homeState.whackamole
    }
)

export const selectGamestate = createSelector(
    selectHomeState,
    (homeState: HomeState) => {
        return homeState.gameStarted
    }
)

export const selectHighscore = createSelector(
    selectHomeState,
    (homeState: HomeState) => {
        return homeState.highscore
    }
)
export const selectCurrentScore = createSelector(
    selectHomeState,
    (homeState: HomeState) => {
        return homeState.currentScore
    }
)
export const selectTimer = createSelector(
    selectHomeState,
    (homeState: HomeState) => {
        return homeState.timer
    }
)