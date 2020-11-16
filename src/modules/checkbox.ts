import { SitkaModule } from "olio-sitka"
import { put, select } from "redux-saga/effects"
import { AppModules, AppState } from "."

export type CheckboxState = string

export class CheckboxModule extends SitkaModule<CheckboxState, AppModules> {
  public moduleName: string = "AROL"
  public defaultState = undefined

}

