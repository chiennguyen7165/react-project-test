import React from "react";
import "./App.css";
import "./app.scss";
import Selector from "./component/Selector";
/** shift + alt + o xoa import th */


function App(props) {
  
  const [items, setItems] = React.useState(["Hoa","Huong","Ha"]);
  function updateItems(){
    if(items === ["Hoa","Huong","Ha"]){
      setItems(["Ronaldo","Messi","Neymar"]);
    }
  }
  return (
    <div className="app">
      {/* <Selector isMultiChoice={false} onLoad = {updateItems}/> */}
      <Selector isMultiChoice={false} items={["Ronaldo","Messi","Neymar"]}/>
    </div>
  );
}

export default App;
