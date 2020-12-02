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


  const handleChange = (event: { target: { name: string, checked: boolean } }) => {
    setCheckboxVal({ ...checkboxVal, [event.target.name]: event.target.checked })
    checkboxModule.handleUpdateCount(event.target.checked)
    // setAdvCheckboxVal(event.target.checked)
  }


  const { rule1, rule2, rule3, rule4, rule5, rule6 } = checkboxVal

  // <h1>{checkBox}</h1>

  const styles = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <>
      <CheckboxContainer style={styles}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend"><b>Consent Status</b></FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={rule2}
                  onChange={handleChange}
                  name="rule2"
                />}
              label="Pending"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={rule3}
                  onChange={handleChange}
                  name="rule3"
                />}
              label="Active"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={rule4}
                  onChange={handleChange}
                  name="rule4"
                />}
              label="Expired"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={rule5}
                  onChange={handleChange}
                  name="rule5"
                />}
              label="Revoked"
            />
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