
import { Whackamole } from '../models/whackamole.model';
import { createReducer, on } from '@ngrx/store';
import { homeActionsDecreaseTimer, homeActionsGenerateMole, homeActionsToggleGame, homeActionsWhackamole } from './home.actions';

export interface HomeState {
    currentScore: any,
    gameStarted: boolean,
    highscore: any,
    timer: any,
    whackamole: Array<Whackamole>,
}

export const initialState: HomeState = {
    currentScore: 0,
    gameStarted: false,
    highscore: 0,
    timer: 30,
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
}

export const homeReducer = createReducer(
    initialState,
    on(homeActionsToggleGame, (state, { gameState }) => {
        return {
            ...state, 
            currentScore: 0,
            gameStarted: gameState,
            timer: 30
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
    }),
    on(homeActionsDecreaseTimer, (state) => {
        return {
            ...state,
            timer: state.timer - 1
        }
    })
)