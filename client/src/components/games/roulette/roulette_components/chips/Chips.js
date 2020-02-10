import React from 'react';
import './Chips.css';

class Chip extends React.Component {

  removeChips = this.props.removeChips;  

  state = {
    selArr: this.props.selArr
  }

  render() {
    if (this.props.active && this.props.selArr.includes(this.props.id)) {
      return (
        <div className="chip d-inline-block" id={this.props.id} >10</div>
      )
    } else {
      return <div>{this.props.id}</div>
    }
  }
}

export default Chip;