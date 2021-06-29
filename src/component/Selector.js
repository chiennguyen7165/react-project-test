import React from "react";

class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: ["Hoa", "Huong", "Ha"] };
    this.changeItems = this.changeItems.bind(this);
  }

  changeItems(newItems) {
    console.log("changeItems: ");
    this.setState({ items: newItems });
  }

  render() {
    console.log("render");
    console.log(this.state);
    return (
      <>
        {this.state.items && this.state.items?.length > 0 && (
          <select>
            {this.state.items.map((item, index) => (
              <option key={index} value={index}>
                {item}
              </option>
            ))}
          </select>
        )}
      </>
    );
  }
}

export default Selector;
