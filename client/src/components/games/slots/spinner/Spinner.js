import React from 'react';
import Wheel from '../wheel/Wheel.js';
import './Spinner.css';
import diamond from '../assets/img/diamond.png';
import cherry from '../assets/img/cherry.png';
import lemon from '../assets/img/lemon.png';
import luck from '../assets/img/luck.png';
import dollar from '../assets/img/dollar.png';
import seven from '../assets/img/seven.png';

class Spinner extends React.Component {

  state = {
    spinning: false,
    wheels: [],
  }

  images = [diamond, cherry, lemon, luck, dollar, seven]

  componentDidMount() {
    this.setState({
      wheels: [
        this.randomImage(),
        this.randomImage(),
        this.randomImage(),
      ]}
    )
  }

  static getDerivedStateFromProps(props, state) {
    return { spinning: props.spin }
  }

  componentDidUpdate(prevProps, prevState) {
    const { spinning } = this.state

    if (spinning && (spinning !== prevState.spinning)) {
      this.tick()
    }

    if (!spinning && (spinning !== prevState.spinning)) {
      clearInterval(this.isSpinning)
      this.props.onStop(this.state.wheels)
    }
  }

  randomImage = () => this.images[Math.floor((Math.random() * this.images.length))]

  spin = () => this.setState({
    wheels: [
      this.randomImage(),
      this.randomImage(),
      this.randomImage()
    ]
  })

  tick = () => this.isSpinning = setInterval(this.spin, 75)

  render() {
    const { wheels } = this.state

    return (
      <React.Fragment>
       <div className="spinner">
        {wheels.map((wheel, id) => (
          <Wheel key={`${id}_${wheel}`} image={wheel} />)
        )}
          </div>
      </React.Fragment>
    )
  }
}

export default Spinner
