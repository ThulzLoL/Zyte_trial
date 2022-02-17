
import { Wackamole } from '../models/wackamole.model';
import { createReducer } from '@ngrx/store';

export interface HomeState {
    highscore: any,
    wackamole: Array<Wackamole>,
    gameStarted: boolean
}

export const initialState: HomeState = {
    highscore: 0,
    wackamole: [
        {
            id: '0',
            active: false
        },
        {
            id: '1',
            active: false
        },
        {
            id: '2',
            active: false
        },
        {
            id: '3',
            active: false
        },
        {
            id: '4',
            active: false
        },
        {
            id: '5',
            active: false
        },
    ],
    gameStarted: false
}

export const homeReducer = createReducer(
    initialState
)