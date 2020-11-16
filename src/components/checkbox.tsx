import * as React from "react"
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  styled,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}))

type AROLCheckboxProps = {
  // readonly checkboxCount: number
  // readonly handleCheckboxClick: () => void
}

const AROLCheckbox = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    rule1: true,
    rule2: false,
    rule3: false,
    rule4: false,
    rule5: false,
    rule6: false,

  })

  const handleChange = (event: { target: { name: string, checked: boolean } }) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  }

  const { rule1, rule2, rule3, rule4, rule5, rule6 } = state


  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">Aron's Rules of Life</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={rule1}
              onChange={handleChange}
            />}
          label="rule 1"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={rule2}
              onChange={handleChange}
            />}
          label="rule 2"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={rule3}
              onChange={handleChange}
            />}
          label="rule 3"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={rule4}
              onChange={handleChange}
            />}
          label="rule 4"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={rule5}
              onChange={handleChange}
            />}
          label="rule 5"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={rule6}
              onChange={handleChange}
            />}
          label="rule 6"
        />
      </FormGroup>
    </FormControl>
  )
}

export default AROLCheckbox

//Styles

const CheckboxContainer = styled(Box)({
  backgroundColor: "green"
})