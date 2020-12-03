import { Box } from "@material-ui/core"
import { SitkaModule } from "olio-sitka"
import { call, put, select } from "redux-saga/effects"
import { AppModules, AppState } from "."

export type CheckboxState = any

export class CheckboxModule extends SitkaModule<CheckboxState, AppModules> {
  public moduleName: string = "checkBox"
  public defaultState = {
    cool: "yep",
    boxes: [
    {
      checked: false,
      name: "rule1",
      label: "rule0"
    },
    {
      checked: false,
      name: "rule2",
      label: "rule1"
    }
  ]
}

  // public *handleUpdateCount(clicked: boolean): {} {
  //   const total: CheckboxState = yield select(this.getTotal)
  //   if(clicked === true) {
  //     yield put(this.setState(total + 1))
  //   }
  //   else if (clicked === false) {
  //     yield put(this.setState(total - 1))
  //   }
  // }

  public *handleUpdateChecked(): {} {
    yield call(this.mergeState, {
      checked: true
  })
}

  public *handleChecked(name: string): {} {
    const state = yield select(this.getState)
    state.boxes.map((box: any) => {
      if(box.name === name){
        box.checked === false ? box.checked = true : box.checked = false
        
      }
    }
    // box.name === name ? box.checked = true : console.log("nah")
    )
    yield call(this.mergeState, {
         ...state.boxes
  })
}

  private getTotal (state: AppState): CheckboxState {
    return state.checkBox
  }
}
