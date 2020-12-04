import { Sitka } from "olio-sitka"
import { Store } from "redux"
import { CheckboxModule, CheckboxState } from "./checkbox"
import { AuthModule, AuthState } from "./auth"

export interface AppModules {
  readonly checkBox: CheckboxModule
  readonly auth: AuthModule
}

export interface AppState {
  readonly checkBox: CheckboxState
  readonly auth: AuthState
  readonly __sitka__: Sitka<AppModules>;
}

const sitka = new Sitka<AppModules>({ log: true})
sitka.register([new CheckboxModule()])
sitka.register([new AuthModule()])


const store = sitka.createStore() as Store

export { store, sitka}
