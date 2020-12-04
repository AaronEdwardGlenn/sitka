import { Sitka, SitkaModule } from "olio-sitka"
import { call, put, select } from "redux-saga/effects"
import { AppModules } from "."

export type AuthState = any

export class AuthModule extends SitkaModule<AuthState, AppModules> {
  public moduleName: string = "auth"
  public defaultState = {
    user: "",
    password: "",
    loggedIn: false
  }
}