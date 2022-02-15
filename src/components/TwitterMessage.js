import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ''
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let character = this.props.maxChars - this.state.message.length;

    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.message}/> {character} characters left</div>
    );
  }
}

//TwitterMessage maxChars={280} 
export default TwitterMessage;
