import React from "react"
import { connect } from "react-redux";
import { AppState, AppModules } from "./modules";
import AROLCheckbox from "./components/checkbox"


function App() {
  return (
    <div className="App">
      <AROLCheckbox />
    </div>
  );
}


export default connect((state: AppState) => {
  // const modules: AppModules = state.__sitka__.getModules();

  return {
    sitkaState: state,
  };
})(App);
