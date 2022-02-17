import { createAction, props } from '@ngrx/store'

export const validateHighscore = createAction(
    '[Home Actions] Validating Highscore',
    props<{ value: any }>()
)