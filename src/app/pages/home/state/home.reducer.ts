
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
        let newHighscore = (!gameState && state.currentScore > state.highscore) ? state.currentScore : state.highscore; 
        let currentScore = (!gameState) ? state.currentScore : 0; 
        return {
            ...state, 
            highscore: newHighscore,
            currentScore,
            gameStarted: gameState,
            timer: 30,
            whackamole: initialState.whackamole
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
        const indexActiveMole = state.whackamole.findIndex(mole => mole.active === true);
        return {
            ...state,
            currentScore: indexActiveMole === -1 ? state.currentScore : state.currentScore - 1,
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