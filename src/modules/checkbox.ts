import { SitkaModule } from "olio-sitka"
import { call, put, select } from "redux-saga/effects"
import { AppModules } from "."

type Boxes = {
  checked: boolean,
  name: string
}

export type CheckboxState = {
  count: number,
  boxes: Array<Boxes>
}

export class CheckboxModule extends SitkaModule<CheckboxState, AppModules> {
  public moduleName: string = "checkBox"
  public defaultState = {
    count: 0,
    boxes: [
      {
        checked: false,
        name: "Don’t pollute the console log",
      },
      {
        checked: false,
        name: "Don’t hardcoded strings and appStyles",
      },
      {
        checked: false,
        name: "Keep formatting strict",
      },
      {
        checked: false,
        name: "Make sure yarn build prod works before finalizing PR",
      },
      {
        checked: false,
        name: "Cross PR with yourselves",
      },
      {
        checked: false,
        name: "And ask me questions of you are not sure of things don’t wait till PR",
      },
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

  public *handleReset(): {} {
    const state = yield select(this.getState)
    state.boxes.map((box: any) => box.checked = false)
    yield call(this.mergeState, {
      ...state.boxes
    })
    yield put(this.resetState())
  }
}
