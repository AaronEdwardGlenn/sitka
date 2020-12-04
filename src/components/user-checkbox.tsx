import * as React from "react"
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from "@material-ui/core"
import { makeStyles, styled } from "@material-ui/core/styles"
import { connect } from "react-redux"
import { AppState } from "../modules/index"
import { useSpring, animated } from "react-spring"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}))

type UserCheckboxProps = {
  readonly sitkaState: AppState;
}

const UserCheckbox = ({
  sitkaState
}: UserCheckboxProps) => {
  const classes = useStyles();

  const styles = useSpring({ opacity: 1, from: { opacity: 0 } })

  // const boxes =
  //   <FormControlLabel
  //     key={"KEY"}
  //     control={
  //       <Checkbox
  //         checked={false}
  //         onChange={() => alert("NAME")}
  //       />}
  //     label={"NAME"}
  //   />

  return (
    <>
      <CheckboxContainer style={styles}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormGroup>
            <FormControlLabel
              key={"KEY"}
              control={
                <Checkbox
                  checked={false}
                  onChange={() => alert("NAME")}
                />}
              label={"NAME"}
            />
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
})(UserCheckbox)

//styles
const CheckboxContainer = styled(animated.div)({
  display: "flex",
  justifyContent: "left",
  margin: 20
})
