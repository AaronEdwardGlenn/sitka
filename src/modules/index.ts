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

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const store = <Store>sitka.createStore()
