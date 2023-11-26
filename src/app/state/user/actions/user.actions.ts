import { createAction, props } from '@ngrx/store';
import { UserResponse } from "../../../api/spring-backend";

export const loginFinished = createAction(
  '[App] loginInit',
  props<{ email: string, password: string }>()
);

// export const loginFinished = createAction(
//   '[App] loginFinished',
//   props<{ user?: UserResponse }>()
// );

export const loginFailed = createAction(
  '[App] loginFailed',
  props<{ errorMessage: string }>()
);

