import { Checkbox, FormControlLabel } from "@material-ui/core"
import React from "react"
import { connect } from "react-redux"
import { AppModules, AppState, sitka } from "../modules/index"

export interface CheckboxesI {
  checked: boolean,
  name: string | undefined
  label: string
}

const CheckBoxes = ({ items, checkboxModule }: any) => {
  const { handleChecked } = checkboxModule
  const checkboxes = items.map((item: CheckboxesI) => (
    <FormControlLabel
      key={item.name}
      control={
        <Checkbox
          checked={item.checked}
          onChange={() => handleChecked(item.name)}
        />}
      label={item.name}
    />
  ))
  return checkboxes
}

export default connect((state: AppState) => {
  const modules: AppModules = sitka.getModules()
  return {
    sitkaState: state,
    checkboxModule: modules.checkBox,
  };
})(CheckBoxes)
