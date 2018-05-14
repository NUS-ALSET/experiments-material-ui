import React from "react";
import { render } from "react-dom";

import AppFrame from "./AppFrame";

const App = () => <AppFrame>The assignments view would go here.</AppFrame>;

render(<App />, document.getElementById("root"));
