import { Sitka } from "olio-sitka"
import { Store } from "redux"
import { CheckboxModule, CheckboxState } from "./checkbox"

export interface AppModules {
  readonly checkBox: CheckboxModule
}

export interface AppState {
  readonly checkBox: CheckboxState
  readonly __sitka__: Sitka<AppModules>;
}

const sitka = new Sitka<AppModules>({ log: true})
sitka.register([new CheckboxModule()])

const store = sitka.createStore() as Store

export { store, sitka}
