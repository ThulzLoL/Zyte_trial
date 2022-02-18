
import { Whackamole } from '../models/whackamole.model';
import { createReducer, on } from '@ngrx/store';
import { homeActionsGenerateMole, homeActionsToggleGame, homeActionsWhackamole } from './home.actions';

export interface HomeState {
    highscore: any,
    whackamole: Array<Whackamole>,
    gameStarted: boolean,
    currentScore: any
}

export const initialState: HomeState = {
    highscore: 0,
    currentScore: 0,
    whackamole: [
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
    initialState,
    on(homeActionsToggleGame, (state, { gameState }) => {
        return {
            ...state, 
            currentScore: 0,
            gameStarted: gameState
        };
    }),
    on(homeActionsWhackamole, (state, { id }) => {
        let index = state.whackamole.findIndex(mole => mole.id === id && mole.active === true);
        if(index == -1){
            return state
        }
        return {
            ...state,
            currentScore: state.currentScore + 1, 
            highscore: ((state.currentScore + 1) > state.highscore) ? (state.currentScore + 1) : state.highscore,
            whackamole: state.whackamole.map((mole, i) => {
                if(index === i){
                    return {
                        ...mole,
                        active: false
                    }
                } else {
                    return mole
                }
            })
        };
    }),
    on(homeActionsGenerateMole, (state) => {
        const index = Math.floor(Math.random() * state.whackamole.length);
        return {
            ...state,
            whackamole: state.whackamole.map((mole, i) => {
                if(index === i){
                    return {
                        ...mole,
                        active: true
                    }
                } else {
                    return {
                        ...mole,
                        active: false
                    }
                }
            })
        };
    })
)