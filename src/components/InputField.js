import React from 'react';

class InputField extends React.Component {
    render() {
      const classes = this.props.className + " textbox hvr-underline-from-center"
      return (
        <div className="input-div">
          <input 
            value={this.props.value}
            onChange={this.props.handleChange}
            name = {this.props.name}
            placeholder={this.props.placeholder}
            className={classes}
            type={this.props.type}
            required={this.props.required} /> 
          <label className="label"></label>
        </div>
      );
    }
  }
  
  //fix inputs being required 
  // animation of floating label would be very nice
  
  export default InputField