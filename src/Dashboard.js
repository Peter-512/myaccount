import React from 'react';
import Navbar from "./components/Navbar"
import ProfileData from "./components/ProfileData"
import Addresses from "./components/Addresses"

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "Harry",
      lastname: "Potter",
      sex: "male",
      email: "harry.potter@gmail.com",
      customernumber: 5218021513,
      company: "Hogwarts AG",
      street: "Hogwartsstreet 14",
      postcode: "2516",
      city: "London",
      country: "Great Britian",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value});
  }
  
  // cancelling goes back to the orginal value instead of the value it was when editing was started --> fix
  // also every cancel button resets every tile not just the one that was worked on (that may fix itself once the first issue is solved though)
  handleCancel(state) {
    this.setState({
      firstname: state.data.firstname,
      lastname: state.data.lastname,
      company: state.data.company,
      email: state.data.email,
      street: state.data.street,
      postcode: state.data.postcode,
      city: state.data.city
    })
  }
  
  render() {
    return (
      <div className="page">
        <Navbar />
        <div className="dashboard">
          <ProfileData 
            data={this.state} 
            handleValueChange={this.handleInputChange} 
            handleCancel={this.handleCancel} />
          <Addresses 
            data={this.state}
            handleValueChange={this.handleInputChange}
            handleCancel={this.handleCancel} />
        </div>
      </div>
    );
  }
}

export default Dashboard
