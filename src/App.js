
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Starterdy from "./pages/starterdy";
import Msg from "./pages/msg";
// import Webdesign from "./pages/webdesign";


function App() {

  return (
    <BrowserRouter>
 
        <Route path="/starterdy" component={Starterdy} />
        <Route path="/msggg" component={Msg} />
    </BrowserRouter>
  );
}

export default App;