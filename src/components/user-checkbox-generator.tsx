import * as React from "react"
import { TextField } from "@material-ui/core"
import { connect } from "react-redux"
import { AppState } from "../modules/index"
import { useState } from "react"
import { checklistRef } from "../modules/firebase"

type UserCheckboxProps = {
  readonly sitkaState: AppState;
}

const UserCheckboxGenerator = ({
  sitkaState
}: UserCheckboxProps) => {

  const [label, setLabel] = useState("")
  const createCheckbox = (e: React.FormEvent<EventTarget>) => {
    const customCheckbox = {
      name: label,
      checked: false
    }
    checklistRef.push(customCheckbox)
  }

  return (
    <>
      <form onSubmit={createCheckbox}>
        <TextField
          style={{ width: "100%" }}
          id="outlined-basic"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          label="Add checkbox to your list."
          variant="outlined"
        />
      </form>
    </>
  )
}


export default connect((state: AppState) => {
  return {
    sitkaState: state
  }
})(UserCheckboxGenerator)
