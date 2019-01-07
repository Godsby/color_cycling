import React from 'react';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      favorite_flavors: 'strawberry'
    }

    this.handleChange = this.handleChange.bind(this);
    // this.handleName = this.handleName.bind(this);
    // this.handleEmail = this.handleEmail.bind(this);
  }


  // handleName(event) {
  //   debugger
  //   this.setState({
  //     name: event.target.value
  //   })
  // }

  // handleEmail(event) {
  //   this.setState({
  //     email: event.target.value
  //   })
  // }


  //replace above two functions with the array as a key
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
      //.name refer to the name attribute to inputs within form below.
    })
  }

  render () {
    console.log(this.state);
    return (
      //event delegation and bubbling. each child node executed, parent will be executed as well.
      <>
        <h1>
          SignUp Form
        </h1>

        <form onChange={this.handleChange}>
          <label htmlFor='Name'>Name</label>
          <input type='text' placeholder='Your Name' name='name' value={this.state.name} id='Name'/> <br/>
          <label htmlFor='Email'>Email</label>
          <input type='text' placeholder='Email' name='email' value={this.state.email} id='Email'/> <br/>

          Favorite Flavors
          <select name='favorite_flavors' value={this.state.favorite_flavors}>
            <option value='Strawberry'>Strawberry</option>
            <option value='Chocolate'>Chocolate</option>
            <option value='vanilla'>vanilla</option>
          </select>
        </form>

      </>
    )
  }
}

export default SignUp;