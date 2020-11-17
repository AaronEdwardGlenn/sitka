import { SitkaModule } from "olio-sitka"
import { call, put, select } from "redux-saga/effects"
import { AppModules, AppState } from "."

export type CheckboxState = number

export class CheckboxModule extends SitkaModule<CheckboxState, AppModules> {
  public moduleName: string = "checkBox"
  public defaultState = 0

  public *handleUpdateCount(clicked: boolean): {} {
    const total: CheckboxState = yield select(this.getTotal)
    if(clicked === true) {
      yield put(this.setState(total + 1))
    }
    else if (clicked === false) {
      yield put(this.setState(total - 1))
    }
  }

  private getTotal (state: AppState): CheckboxState {
    return state.checkBox
  }
}
