import React from "react"
import { Box, styled } from "@material-ui/core"

const Header = () => {
  return (
    <HeaderContainer>
      Aron's Rules of Life
    </HeaderContainer>
  )
}

export default Header

//styles
const HeaderContainer = styled(Box)({
  backgroundColor: "lightblue",
  fontSize: "18",
  fontWeight: "bold"
})
