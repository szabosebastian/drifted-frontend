import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "../reducers/user.reducers";

export const selectUserState = createFeatureSelector<UserState>("user");
export const selectUser = createSelector(
  selectUserState,
  (state: UserState) => state.user
);
