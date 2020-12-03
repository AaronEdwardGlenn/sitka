import * as React from "react"
import {
  FormControl,
  FormGroup,
} from "@material-ui/core"
import { makeStyles, styled } from "@material-ui/core/styles"
import { connect } from "react-redux"
import { AppState } from "../modules/index"
import { useSpring, animated } from "react-spring"
import CheckBoxes from "./checkbox-utils"
import Counter from "./counter"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}))

type AROLCheckboxProps = {
  readonly sitkaState: AppState;
}

const AROLCheckbox = ({
  sitkaState
}: AROLCheckboxProps) => {
  const classes = useStyles();

  const styles = useSpring({ opacity: 1, from: { opacity: 0 } })
  const { checkBox: { boxes } } = sitkaState

  return (
    <>
      <Counter />
      <CheckboxContainer style={styles}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormGroup>
            <CheckBoxes items={boxes} />
          </FormGroup>
        </FormControl>
      </CheckboxContainer>
    </>
  )
}

export default connect((state: AppState) => {
  return {
    sitkaState: state
  }
})(AROLCheckbox)

//styles
const CheckboxContainer = styled(animated.div)({
  display: "flex",
  justifyContent: "left",
  margin: 20
})
