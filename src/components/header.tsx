import React from "react"
import { Box, styled } from "@material-ui/core"

interface HeaderProps {
  content: string
}

const Header = ({ content }: HeaderProps) => {
  return (
    <HeaderContainer style={{ background: "lightblue" }}>
      <div>
        {content}
      </div>
    </HeaderContainer>
  )
}

export default Header

//styles
const HeaderContainer = styled(Box)({
  display: "flex",
  fontSize: "18",
  fontWeight: "bold",
  justifyContent: "center"
})
