import React from 'react';
import InputField from "./InputField"

class Addresses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {edit: false,
                  data: this.props.data
                 };
    this.editMode = this.editMode.bind(this);
    this.cancel = this.cancel.bind(this);
  }
  
  editMode(state) {
      this.setState({
        edit: !state.edit,
        data: state.data
      })
    }
  
  cancel(state) {
    this.setState({
      edit: !state.edit
    })
    this.props.handleCancel(state)
  }
  
  render() {
    const data = this.props.data
    const receiver = data.company + ", " + data.firstname + " " + data.lastname
    const fulladdress = data.street + ", " + data.postcode + " " + data.city
    if (!this.state.edit) {
      return (
        <div className="tile growing-animation">
          <div className="tile-heading">
            <i className="fas fa-map-marker-alt blue icon-margin"></i> Addresses 
            <button 
              onClick={() => this.editMode(this.state)}
              className="tile-button blue">edit
            </button>
          </div>
          <div className="addresses">
            <ul>
              <li>Current standard delivery address: </li>
              <li>{receiver} </li>
              <li>{fulladdress} </li> 
            </ul>
          </div>
        </div>
      )
    } else {
      return (
        <div className="tile growing-animation">
          <div className="tile-heading">
            <i className="fas fa-map-marker-alt blue icon-margin"></i> Addresses 
            <button 
              onClick={() => this.editMode(this.state)}
              className="tile-button blue">
              <i className="far fa-2x fa-check-circle"></i>
            </button>
            <button 
              onClick={() => this.cancel(this.state)}
              className="tile-button blue">
              <i className="far fa-2x fa-times-circle"></i>
            </button>
          </div>
          <div className="addresses">
            <ul>
              <li>Current standard delivery address: </li>
              <li>{receiver} </li>
              <li>
                <InputField
                  value={data.street}
                  handleChange={this.props.handleValueChange}
                  name="street"
                  placeholder="Street Address"
                  type="text"
                  required />
              </li>
              <li>
                <InputField
                  className="float-left"
                  value={data.postcode}
                  handleChange={this.props.handleValueChange}
                  name="postcode"
                  placeholder="Postcode"
                  type="text"
                  required />
                <InputField
                  className="float-right"
                  value={data.city}
                  handleChange={this.props.handleValueChange}
                  name="city"
                  placeholder="City"
                  type="text"
                  required />
              </li>
            </ul>
          </div>
        </div>
      )
    }  
  }
}

export default Addresses