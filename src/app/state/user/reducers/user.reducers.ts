import { createReducer, on } from "@ngrx/store";
import { loginFailed, loginFinished } from "../actions/user.actions";
import { UserResponse } from "../../../api/spring-backend";

export interface UserState {
  isLoggedIn: boolean;
  isLoggedFailed: boolean;
  user?: UserResponse;
  isUserAdmin: boolean;
  errorMessage: string;
}

export const initialState: UserState = {
  isLoggedFailed: false,
  isLoggedIn: false,
  user: undefined,
  isUserAdmin: false,
  errorMessage: ''
};

export const userReducer = createReducer(
  initialState,
  on(loginFinished, (state, props) => {
    return {
      ...state,
      isLoggedIn: true,
      // user: props.user,
      isUserAdmin: false, //todo
      isLoggedFailed: false
    };
  }),
  on(loginFailed, (state, props) => {
    return { ...state, isLoginFailed: true, errorMessage: props.errorMessage };
  }),
);
