import React from "react"
import { Box, styled } from "@material-ui/core"

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        Aron's Rules of Life
      </div>
    </HeaderContainer>
  )
}

export default Header

//styles
const HeaderContainer = styled(Box)({
  display: "flex",
  backgroundColor: "lightblue",
  fontSize: "18",
  fontWeight: "bold",
  justifyContent: "center"
})
