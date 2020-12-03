import { Box, styled } from "@material-ui/core"
import React from "react"
import { connect } from "react-redux"
import { AppModules, AppState, sitka } from "../modules"


type CounterProps = {
  readonly sitkaState: AppState;
}

const Counter = ({ sitkaState }: CounterProps) => {
  const { checkBox: { count } } = sitkaState
  const color = count === 2 ? "pink" : "green"
  return (
    <CounterContainer style={{ backgroundColor: color }}>
      Count: {count}
    </CounterContainer>
  )
}

export default connect((state: AppState) => {
  return {
    sitkaState: state
  }
})(Counter)

//styles 
const CounterContainer = styled(Box)({
})