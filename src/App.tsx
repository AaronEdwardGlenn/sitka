import React from "react"
import { connect } from "react-redux"
import { AppState, AppModules } from "./modules"
import AROLCheckbox from "./components/checkbox"
import PageShell from "./components/pageshell"
import Header from "./components/header"

function App() {
  return (
    <div className="App">
      <PageShell>
        <Header />
        <AROLCheckbox />
      </PageShell>
    </div>
  );
}


export default connect((state: AppState) => {
  // const modules: AppModules = state.__sitka__.getModules();

  return {
    sitkaState: state,
  };
})(App);
