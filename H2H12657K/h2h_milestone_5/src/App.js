import React from 'react';
import Headerr from "./components/Headerr.js";
import Footerr from "./components/Footerr.js";

import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <Headerr />
      <HomePage />
      <Footerr />
    </div>
  );
}

export default App;
