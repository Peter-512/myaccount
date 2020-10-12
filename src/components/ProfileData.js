import React from 'react';
import InputField from "./InputField"

class ProfileData extends React.Component {
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
    const salutation = data.sex === "male" ? "Mr." : "Ms"
    const name = data.firstname + " " + data.lastname
    const email = data.email
    const company = data.company
    const customernumber = data.customernumber
    
    if (!this.state.edit) {
      return (
        <div className="tile growing-animation">
          <div className="tile-heading">
            <i className="fas fa-user blue icon-margin"></i> Profile Data 
            <button 
              onClick={() => this.editMode(this.state)} 
              className="tile-button blue">edit
            </button>
          </div>
          <div className="profile-data">
            <ul>
              <li>{salutation} {name}</li>
              <li>{company} </li>
              <li>{email} </li>
              <li>Customer number {customernumber} </li>
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className="tile growing-animation">
          <div className="tile-heading">
            <i className="fas fa-user blue icon-margin"></i> Profile Data 
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
          <div className="profile-data">
            <ul>
              <li>
                <InputField 
                  id="first-name-input" 
                  className="float-left"
                  value={data.firstname}
                  handleChange={this.props.handleValueChange} 
                  name= "firstname"
                  placeholder="First name" 
                  type="text" 
                  required />
              </li>
              <li>
                <InputField 
                  id="last-name-input"
                  className="float-right"
                  value={data.lastname}
                  handleChange={this.props.handleValueChange}
                  name= "lastname"
                  placeholder="Last name"
                  type="text"
                  required />
              </li>
              <li>
                <InputField 
                  id="company-input"
                  value={data.company}
                  handleChange={this.props.handleValueChange}
                  name="company"
                  placeholder="Company"
                  type="text"
                  required />
              </li>
              <li>
                <InputField 
                  id="email-input"
                  value={data.email}
                  handleChange={this.props.handleValueChange}
                  name="email"
                  placeholder="E-Mail"
                  type="email"
                  required="true" />
              </li>
              <li>Customer number {customernumber} </li>
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default ProfileData