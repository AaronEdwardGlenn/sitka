import React from "react"
import { Box, styled } from "@material-ui/core"

interface PageContentProps {
  leftSide: any,
  rightSide: any
}

const PageContent = ({ leftSide, rightSide }: PageContentProps) => {
  return (
    <PageContainer>
      <LeftSide>
        {leftSide}
      </LeftSide>
      <RightSide>
        {rightSide}
      </RightSide>
    </PageContainer>
  )
}

export default PageContent

const PageContainer = styled(Box)({
  display: "flex",
  overflow: "hidden",
})

const LeftSide = styled(Box)({
  marginRight: "auto",
  background: "blue"
})

const RightSide = styled(Box)({
  marginLeft: "auto",
  background: "green"
})
