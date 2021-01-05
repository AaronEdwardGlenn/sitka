import { Sitka, SitkaModule } from "olio-sitka"
import { call, put, select } from "redux-saga/effects"
import { AppModules } from "."
import { AuthState, User } from "./types"

export class AuthModule extends SitkaModule<AuthState, AppModules> {
  public moduleName: string = "auth"
  public defaultState = {
    user: null,
    authenticated: false,
    loading: false,
    error: "",
    needVerification: true,
    success: "",
  }

  public *handleSetUser(user: User): {} {
    const state = yield select(this.getState)
    try {
      yield call(this.handleSetLoading, true)
      state.user = user
      yield call(this.mergeState, {
        ...state.user
      })
      yield call(this.handleSetAuthentication, true)
      yield call(this.handleSetNeedVerification, true)
    }
    catch {
      yield call(this.handleSetError)
    }
    finally {
      yield call(this.handleSetLoading, false)
      yield call(this.handleSetSuccess)
    }
  }

  private *handleSetLoading(shallWeLoad: Boolean): {} {
    const state = yield select(this.getState)
    state.loading = shallWeLoad
    yield call(this.mergeState, {
      ...state.loading
    })
  }

  public *handleSignOut(): {} {
    const state = yield select(this.getState)
    try {
      yield call(this.handleSetLoading, true)
      state.user = null
      yield call(this.handleSetAuthentication, false)
      yield call(this.handleSetNeedVerification, false)
      yield call(this.mergeState, {
        ...state.user
      })
    }
    catch {
      yield call(this.handleSetError)
    }
    finally {
      yield call(this.handleSetLoading, false)
      yield call(this.handleSetSuccess)
    }
  }

  private *handleSetNeedVerification(verified: boolean): {} {
    const state = yield select(this.getState)
    state.needVerification = verified
    yield call(this.mergeState, {
      ...state.needVerification
    })
  }

  private *handleSetAuthentication(authenticated: boolean): {} {
    const state = yield select(this.getState)
    state.authenticated = authenticated
    yield call(this.mergeState, {
      ...state.authenticated
    })
  }

  public *handleSetSuccess(): {} {
    const state = yield select(this.getState)
    state.success = "Hell yeah. Successful AF."
    yield call(this.mergeState, {
      ...state.success
    })
  }

  public *handleSetError(): {} {
    const state = yield select(this.getState)
    state.error = "Ah Shit. Clangup."
    yield call(this.mergeState, {
      ...state.error
    })
  }
}