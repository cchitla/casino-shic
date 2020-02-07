import React, { Component } from 'react';
import './BlackjackTable.css';

import io from 'socket.io-client';

let socket;

export default class BlackjackTableClass extends Component {
  constructor(props) {
    super(props)

    this.state = {
      players: [],
    };

    this.ENDPOINT = "localhost:3001"
  };

  componentDidMount() {
    socket = io(this.ENDPOINT);
    let player = {
      name: this.props.user.name,
      tableName: this.props.tableName
    }

    socket.emit("join table", player, () => { });
  };

  componentWillUnmount() {
    let player = {
      name: this.props.user.name,
      tableName: this.props.tableName
    }
    socket.emit("leave blackjack table", player);
    socket.off();
  };

  componentDidUpdate(prevProps) {
    socket.on("player joined", ({ name, tableName, presentPlayers }) => {
      console.log(name + "has joined" + tableName);
      console.log("players present:", presentPlayers);
    }
    );
  };

  render() {
    return (
      <div className="blackjackTable">Welcome to blackjack at table: {this.props.tableName}, player {this.props.name}</div>
    );
  };
};