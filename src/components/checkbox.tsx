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
  const [checkboxVal, setCheckboxVal] = React.useState({
    rule1: false,
    rule2: false,
    rule3: false,
    rule4: false,
    rule5: false,
    rule6: false,
  })

  const { checkBox } = sitkaState

  const handleChange = (event: { target: { name: string, checked: boolean } }) => {
    setCheckboxVal({ ...checkboxVal, [event.target.name]: event.target.checked })
    checkboxModule.handleUpdateCount(event.target.checked)
  }

  console.log(sitkaState);

  const { rule1, rule2, rule3, rule4, rule5, rule6 } = checkboxVal

  // <h1>{checkBox}</h1>
  const clickRange = checkBox < 5 ? "blue" : "red"

  return (
    <CheckboxContainer style={{ backgroundColor: clickRange }}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Aron's Rules of Life</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={rule1}
                onChange={handleChange}
                name="rule1"
              />}
            label="rule1"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={rule2}
                onChange={handleChange}
                name="rule2"
              />}
            label="rule2"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={rule3}
                onChange={handleChange}
                name="rule3"
              />}
            label="rule3"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={rule4}
                onChange={handleChange}
                name="rule4"
              />}
            label="rule4"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={rule5}
                onChange={handleChange}
                name="rule5"
              />}
            label="rule5"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={rule6}
                onChange={handleChange}
                name="rule6"
              />}
            label="rule6"
          />
        </FormGroup>
      </FormControl>
    </CheckboxContainer>
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
const CheckboxContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  margin: 30,
  width: "50vh"
})