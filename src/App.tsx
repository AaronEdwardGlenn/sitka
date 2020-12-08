import React from "react"
import { connect } from "react-redux"
import { AppState, AppModules, sitka } from "./modules"
import AROLCheckbox from "./components/checkbox"
import PageShell from "./components/pageshell"
import Header from "./components/header"
import ResetButton from "./components/button"
import PageContent from "./components/component-split"
import UserCheckbox from "./components/user-checkbox"
import Counter from "./components/counter"

require('dotenv').config()

function App({ checkboxMod }: any) {
  const { handleReset } = checkboxMod
  return (
    <div className="App">
      <Header content={"PR Review Checklist"} />
      <Counter />
      <PageShell>
        <PageContent
          // header={
          //   <Header content={"PR Review Checklist"} />
          // }
          leftSide={
            <>
              <Header content={"Aron's Rules Of Life"} />
              <AROLCheckbox />
            </>
          }
          rightSide={
            <>
              <Header content={"Aaron's Extra List"} />
              <UserCheckbox />
            </>
          }
          footer={
            <>
              <ResetButton handleClick={handleReset} />
            </>
          }
        />
      </PageShell>
    </div>
  );
}


export default connect((state: AppState) => {
  const modules: AppModules = sitka.getModules()

  return {
    sitkaState: state,
    checkboxMod: modules.checkBox
  };
})(App);
