import React from "react";

class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: this.props?.list ? this.props.list : [] };
    this.changeItems = this.changeItems.bind(this);
  }

  changeItems(event) {
    console.log("changeItems: ", event.target.value);
    this.props.onSelected(event.target.value);
  }

  render() {
    return (
      <>
        {this.state?.items && this.state.items?.length > 0 && (
          <select onChange={this.changeItems}>
            {this.state.items.map((item, index) => (
              <option key={index} value={item}>
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
