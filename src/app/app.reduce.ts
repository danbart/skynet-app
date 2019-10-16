import { ActionReducerMap } from '@ngrx/store';


import * as fromAuth from './auth/auth.reducer';
import * as fromUi from './share/ui.reducer';


export interface AppState {
    auth: fromAuth.AuthState;
    ui: fromUi.State;
}

export const appReducers: ActionReducerMap<AppState> = {
    auth: fromAuth.authReducer,
    ui: fromUi.uiReducer
};
