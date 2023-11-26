import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { userReducer } from "../user/reducers/user.reducers";

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  user: userReducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
