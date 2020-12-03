import React from "react"
import { Box, styled } from "@material-ui/core"

interface PageContentProps {
  leftSide: any,
  rightSide: any,
  header?: any,
  footer?: any
}

const PageContent = ({
  leftSide,
  rightSide,
  header,
  footer
}: PageContentProps) => {
  return (
    <>
      <HeaderContainer>
        {header}
      </HeaderContainer>
      <PageContainer>
        <LeftSideContainer>
          {leftSide}
        </LeftSideContainer>
        <RightSideContainer>
          {rightSide}
        </RightSideContainer>
      </PageContainer>
      <FooterContainer>
        {footer}
      </FooterContainer>
    </>
  )
}

export default PageContent

const PageContainer = styled(Box)({
  display: "flex",
  overflow: "hidden",
})

const LeftSideContainer = styled(Box)({
  marginRight: "auto",
  background: "blue"
})

const RightSideContainer = styled(Box)({
  marginLeft: "auto",
  background: "green"
})

const HeaderContainer = styled(Box)({
  background: "yellow"
})

const FooterContainer = styled(Box)({
  background: "red",
  display: "flex",
  justifyContent: "center"
})
