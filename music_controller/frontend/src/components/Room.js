import React, { Component } from "react";

export default class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votesToSkip: 2,
      guestCanPause: false,
      isHost: false,
    };
    this.roomCode = this.props.match.params.roomCode;
  }

  render() {
    return (
      <div>
        <h3>Host: {this.roomCode}</h3>
        <p>votesToSkip: {this.state.votesToSkip}</p>
        <p>guestCanPause: {this.state.guestCanPause}</p>
        <p>isHost: {this.state.isHost}</p>
        <p>1234</p>
      </div>
    );
  }
}
