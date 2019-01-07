import React from 'react';
import './warmup.css';

class Cycling extends React.Component {
  constructor() {
    super();
    this.state = {
      colorArr: ['red', 'yellow', 'blue'],
      colorIdx: 0
    }
    // this.handleColor = this.handleColor.bind(this);
  }

  handleColor = () => {
    // debugger; If we want to use debugger tool, need to write ES 5 way so far.
      const {colorIdx} = this.state;
      this.setState ({
        //.setState METHOD is React. .state is not.
        colorIdx: (colorIdx + 1) % 3
      })
  }

  render(){
    const {colorArr, colorIdx} = this.state;
    return (
      //replace <React.Fragment>
      <>
        <div id = 'primaryColor' className = {colorArr[colorIdx]}></div>
        <button onClick = {this.handleColor}>Click to change color</button>
      </>
    )
  }
}

export default Cycling;