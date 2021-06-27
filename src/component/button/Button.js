//Cach sử dụng trước khi có ES6
//Interface
import React from "react";

//có 3 cách tạo default
// {this.props.text ?? "Button"}
//  constructor(props) {
//   super(props);
//   let { text = "Button" } = props;
//   this.text = text;
// }
//Button.defaultProps
class Button extends React.Component {
  render() {
    return (
      <div className="component_button">
        <button className="btn btn-primary">{this.props.text}</button>
      </div>
    );
  }
}

Button.defaultProps = {
  text: "Lick Huong ne",
}; // dùng được cho cả function

// function Button(props) {
//   //props là obj
//   // coi props là 1 cái state được truyền vào từ bên ngoài
//   // là 1 object có cái key là text
//   const {text = "Button"} = props;

//   // props.text = "Hello"; set state
//   return (
//     <div className="component_button">
//       <button className="btn btn-primary">{text}</button>
//       <button className="btn btn-primary">{props.text}</button>
//     </div>
//   );
// }

export default Button;
