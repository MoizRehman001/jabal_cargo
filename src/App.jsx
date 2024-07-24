import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import DrawerAppBar from "./Components/AppBar";

function App() {
  return (
    <div style={{height : "100%"}} >
       <DrawerAppBar/>
        <Home/>
    </div>
  );
}

export default App;
