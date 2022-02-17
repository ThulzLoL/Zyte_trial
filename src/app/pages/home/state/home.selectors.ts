import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Wackamole } from '../models/wackamole.model';
import { HomeState } from './home.reducer';

export const selectHomeState = createFeatureSelector<HomeState>('home')

export const selectWackamole = createSelector(
    selectHomeState,
    (homeState: HomeState) => {
        return homeState.wackamole
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