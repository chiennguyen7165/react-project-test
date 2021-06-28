import React, { useCallback } from "react";
import "./App.css";
import "./app.scss";
import Selector from "./component/Selector";
/** shift + alt + o xoa import th */

function App(props) {
  const [state, setItems] = React.useState({});
  // const [choice, setChoice] = React.useState(false);
  // function updateItems(){
  //   if(items === ["Hoa","Huong","Ha"]){
  //     console.log("Updating ...")
  //     setItems(["Ronaldo","Messi","Neymar"]);
  //   }
  // }

React.useCallback(() => {
  setItems({
    state,items: ["Ronaldo", "Messi", "Neymar"],
  });
}, [state]);

  return (
    <div className="app">
      {/* <Selector isMultiChoice={false} onLoad = {updateItems}/> */}
      <Selector/>
    </div>
  );
}

export default App;
