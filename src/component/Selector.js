import React from "react";

function Selector(props) {
  const [isSingle, setSingle] = React.useState(true);
  const [items, setItems] = React.useState(["Chien", "Viet", "Dung"]);

  function changeItems(event) {
    console.log("changeItems: ", event.target.value);
    return event.target.value;
  }

  return (
    <>
      {items && items?.length > 0 && (
        <select onChange={changeItems}>
          {items.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      )}
    </>
  );
}

export default Selector;