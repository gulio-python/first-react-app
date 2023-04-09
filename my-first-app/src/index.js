import { StrictMode } from "react";
import { createRoot } from "react-dom/client"

import App from "./App"

const rootElement = document.getElementById("root")  //selects element "root" from the html file
const root = createRoot(rootElement)

root.render(
  <StrictMode> 
    <App />   
  </StrictMode>
)

// StrictMode is a tool that highlights potential issues in a programme. We encapsulate our code as a component. It will not render anything to the DOM.
// This is the code that's going to be rendered to the DOM.