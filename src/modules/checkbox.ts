import { Box } from "@material-ui/core"
import { SitkaModule } from "olio-sitka"
import { call, put, select } from "redux-saga/effects"
import { AppModules, AppState } from "."

export type CheckboxState = any

export class CheckboxModule extends SitkaModule<CheckboxState, AppModules> {
  public moduleName: string = "checkBox"
  public defaultState = {
    count: 0,
    boxes: [
      {
        checked: false,
        name: "rule1",
      },
      {
        checked: false,
        name: "rule2",
      }
    ]
  }

  constructor() {
    super()
    this.handleIncrementCount = this.handleIncrementCount.bind(this)
    this.handleChecked = this.handleChecked.bind(this)
  }

  private *handleIncrementCount(): {} {
    const state = yield select(this.getState)
    const arr = []
    state.boxes.map((box: any) => box.checked === true ? arr.push(box)
     : undefined)
     const counter = arr.length
     state.count = counter
    yield call(this.mergeState, {
      ...state.count
})
  }

  public *handleChecked(name: string): {} {
    const state = yield select(this.getState)
    state.boxes.map((box: any) => box.name === name ?
        box.checked === false ? box.checked = true : box.checked = false : undefined
    )
    yield call(this.mergeState, {
          ...state.boxes
    })
    this.handleIncrementCount()
  }
}

