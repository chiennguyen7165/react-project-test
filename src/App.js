import React from "react";
import "./App.css";
import "./app.scss";
import Selector from "./component/Selector";
/** shift + alt + o xoa import th */

function App(props) {
  const items1 = ["Hoa", "Huong", "Ha", "Chien"];
  const items2 = ["Ronaldo", "Messi", "Neymar", "Chien"];

  const[itemSelected, setItemSelected] = React.useState(null);
  // const handleChangeSelector = React.useCallback((selectedItem) => {
  //   console.log("handleChangeSelector", selectedItem);
  //   alert(selectedItem);
  // }, []);

  // cách dùng useState
  const handleChangeSelector = React.useCallback((value) => {
    setItemSelected(value);
  }, []);

  return (
    <div className="app">
      <Selector mode="single" onSelected={handleChangeSelector} list={items1} />
      <Selector mode="single" onSelected={handleChangeSelector} list={items2} />
      <hr/>
      {itemSelected}
    </div>
  );
}

export default App;
