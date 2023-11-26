import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { map, Observable } from "rxjs";
import { UserState } from "./state/user/reducers/user.reducers";
import { Store } from "@ngrx/store";
import { selectUserState } from "./state/user/selectors/user.selectors";
import { loginFinished } from "./state/user/actions/user.actions";
import { ListUsersRequestParams, UserControllerService } from "./api/spring-backend";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'drifted-frontend';

  user$?: Observable<UserState>;

  constructor(
    private store: Store,
    private userControllerService: UserControllerService
  ) {}

  ngOnInit(): void {
    this.user$ = this.store.select(selectUserState);
  }

  login() {
    this.userControllerService.listUsers({
      emailValue: "s"
    } as ListUsersRequestParams).subscribe((res) => console.log(res));
    this.store.dispatch(loginFinished({
      email: "string",
      password: "string"
    }));
  }
}
