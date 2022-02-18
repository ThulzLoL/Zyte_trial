import { createAction, props } from '@ngrx/store'

export const homeActionsValidateHighscore = createAction(
    '[Home Actions] Validating Highscore',
    props<{ value: any }>()
)

export const homeActionsWhackamole = createAction(
    '[Home Actions] Whack a Mole!',
    props<{id: string}>()
)


export const homeActionsToggleGame = createAction(
    '[Home Actions] Toggle game state!',
    props<{gameState: boolean}>()
)

export const homeActionsGenerateMole = createAction(
    '[Home Actions] Generate Mole!'
)