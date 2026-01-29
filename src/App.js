import React from "react";
import {userContext} from "./context";
import Content from "./context-content";
//import { u } from "tar";

function App() {
  return ( 
      <userContext.Provider value={" Toto"}>
        <Content/>
      </userContext.Provider>
  )
}  
export default App;