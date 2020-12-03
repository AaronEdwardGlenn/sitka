import React from "react"
import { connect } from "react-redux"
import { AppState, AppModules, sitka } from "./modules"
import AROLCheckbox from "./components/checkbox"
import PageShell from "./components/pageshell"
import Header from "./components/header"
import ResetButton from "./components/button"
import PageContent from "./components/component-split"


function App({ checkboxMod }: any) {
  const { handleReset } = checkboxMod
  return (
    <div className="App">
      <PageShell>
        <PageContent
          leftSide={
            <>
              <Header />
              <AROLCheckbox />
            </>
          }
          rightSide={
            <>
              <Header />
              <AROLCheckbox />
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
