import React from "react";

class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMultiChoice: false, items: ["Hoa","Huong","Ha"] };
    // this.changeItems = this.changeItems.bind(this);
  }

//   changeItems() {
//     this.setState({ items: ["Ronaldo", "Messi", "Neymar"]});
//   }

  render() {
    console.log("render");
    console.log(this.props);
    return (
      <>
        {this.state.items && this.state.items?.length > 0 && (
          <select>
            {this.state.items.map((item, index) => (
              <option key={index} value={index}>{item}</option>
            ))}
          </select>
        )}
      </>
    );
  }
}

export default Selector;
