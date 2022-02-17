import { createAction, props } from '@ngrx/store'

export const validateHighscore = createAction(
    '[Home Actions] Validating Highscore',
    props<{ value: any }>()
)

export const wackamole = createAction(
    '[Home Actions] Wack a Mole!',
    props<{id: string}>()
)