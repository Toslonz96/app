import React from "react";
import {userContext} from "./context";
import Content from "./context-content";
import Header from "./header";

function App() {
  let [user,setUser] = React.useState("");
  return ( 
      <userContext.Provider value={[user, setUser]}>
        <Header/>
        <Content/>
      </userContext.Provider>
  )
}  
export default App;