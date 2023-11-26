import { Injectable } from "@angular/core";
import { catchError, mergeMap, switchMap } from "rxjs";
import { loginFailed, loginFinished, loginInit } from "../actions/user.actions";
import { JwtResponse } from "../../../api/spring-backend";
import { HttpErrorResponse } from "@angular/common/http";
import { Actions, createEffect, ofType } from "@ngrx/effects";

@Injectable()
export class UserEffects {

  // constructor(private actions$: Actions) {}
  //
  // loadUsers$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(loginInit.type),
  //     switchMap(({ email, password }) =>
  //       ()
  //     )));
}
