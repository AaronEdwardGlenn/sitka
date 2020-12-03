import * as React from "react"
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@material-ui/core"
import { makeStyles, styled } from "@material-ui/core/styles"
import { connect } from "react-redux"
import { AppModules, AppState, sitka } from "../modules/index"
import { CheckboxModule } from "../modules/checkbox"
import { useSpring, animated } from "react-spring"
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import CheckBoxes, { CheckboxesI } from "./checkbox-utils"



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}))

type AROLCheckboxProps = {
  readonly checkboxModule: CheckboxModule
  readonly sitkaState: AppState;
}

const AROLCheckbox = ({
  checkboxModule,
  sitkaState
}: AROLCheckboxProps) => {
  const classes = useStyles();

  const styles = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <>
      <CheckboxContainer style={styles}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend"><b>Consent Status</b></FormLabel>
          <FormGroup>
            <CheckBoxes items={checkboxModule.defaultState.boxes} />
          </FormGroup>
        </FormControl>
      </CheckboxContainer>
    </>
  )
}

export default connect((state: AppState) => {
  const modules: AppModules = sitka.getModules()
  return {
    checkboxModule: modules.checkBox,
    sitkaState: state
  }
})(AROLCheckbox)

//styles
const CheckboxContainer = styled(animated.div)({
  display: "flex",
  justifyContent: "left",
  margin: 20,
})

const stringStyle = {
  display: "flex",
  alignItems: "center",
  margin: 5
}