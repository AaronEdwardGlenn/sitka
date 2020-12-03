import React from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core"
import RotateLeftIcon from "@material-ui/icons/RotateLeft"

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}))

const ResetButton = ({ handleClick }: any) => {
  const classes = useStyles()

  return (
    <Button
      variant="contained"
      color="default"
      className={classes.button}
      endIcon={<RotateLeftIcon />}
      onClick={handleClick}
    >
      Reset
    </Button>
  )
}

export default ResetButton
