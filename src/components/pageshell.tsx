import { Box, styled } from "@material-ui/core"
import React from "react"

interface PageShellProps {
  children: React.ReactNode
}

const PageShell = ({ children }: PageShellProps) => {
  return (
    <PageContainer>
      {children}
    </PageContainer>
  )
}

export default PageShell

//Styles

const PageContainer = styled(Box)({
  margin: "30px",
  boxShadow: "2px 2px 2px 2px"
})