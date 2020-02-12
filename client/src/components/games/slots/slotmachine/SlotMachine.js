import React from 'react';
import uniq from 'lodash/uniq';
import "./SlotMachine.css";
import Spinner from '../spinner/Spinner.js';
import Sound from '../sound/Sound.js';

const MAX_PRIZE = 25
const CONSEC_PRIZE = 2
const NON_CONSEC_PRIZE = 1

class SlotMachine extends React.Component {

  state = {
    isRunning: false,
    winner: false,
    bet: 0,
    prize: 0,
    balance: 50,
  }

  componentDidMount() {
    this.start = setTimeout(() => {
      this.handleStart()
    }, 600000)
  }

  componentDidUpdate() {
    if (this.state.isRunning) {
      this.stop = setTimeout(() => {
        this.handleStop()
      }, 6000)
    }
  }

  handleStart = () => {
    this.setState({
      isRunning: true,
      winner: false,
      lose: false,
      prize: 0,
      balance: this.state.balance - this.state.bet,
    })
    clearTimeout(this.start)
  }

  handleStop = () => {
    this.setState({ isRunning: false })
    clearTimeout(this.stop)
  }

  handleBet1 = () => {
    this.setState({ bet: 1})
    console.log("you bet 1");
  }

   handleBet5 = () => {
    this.setState({ bet: 5})
    console.log("you bet 5");
  }

  handleBet10 = () => {
    this.setState({ bet: 10})
    console.log("you bet 10");
  }

  handleBet20 = () => {
    this.setState({ bet: 20})
    console.log("you bet 20");
  }

  handleResult = (wheels) => {
    const images = wheels.map(wheel => wheel.split('/').pop())
    const result = uniq(images)

    // Loose.
    if (result.length === 3) {
      this.setState({ winner: false, lose: true, prize: 0 })
      return
    }
    
    // Win max prize.
    if (result.length === 1) {
      this.setState({ winner: true, lose: false, prize: MAX_PRIZE * this.state.bet, balance: this.state.balance + MAX_PRIZE * this.state.bet })
      return
    }

    // Two consecutive symbols.
    if (images[0] === images[1] || images[1] === images[2]) {
      this.setState({ winner: true, lose: false, prize: CONSEC_PRIZE * this.state.bet, balance: this.state.balance + CONSEC_PRIZE * this.state.bet })
      return
    }

    // Non-consecutive symbols.
    this.setState({ winner: true, lose: false, prize: NON_CONSEC_PRIZE * this.state.bet, balance: this.state.balance + NON_CONSEC_PRIZE * this.state.bet })

  }

  render() {
    const { isRunning, winner, lose, prize, balance} = this.state

    return (
      <React.Fragment>
        <h1 className="title">Casino S.H.I.C. Slots</h1>
         <div className="balance">Balance: ${(balance)}</div>
        <Spinner spin={isRunning} onStop={this.handleResult} />
        {(isRunning) && <Sound audio='spinning'/>}
        <div className="prompt">
        <p>Place Your Bet and Spin!</p>
        </div>
        <div className="buttons">
          
          <button onClick={this.handleBet1} className="button selected">$1</button>
          <button onClick={this.handleBet5} className="button selected">$5</button>
          <button onClick={this.handleBet10} className="button selected">$10</button>
          <button onClick={this.handleBet20} className="button selected">$20</button>
          <button onClick={this.handleStart} disabled={isRunning} className="spinButton">Spin</button>
          {(isRunning) && <Sound audio='button'/>}
        </div>
        <div data-testid='prize'>
          {winner && <div className="winner">You Win! Your Prize: ${prize}.00</div>}
          {(winner && prize === MAX_PRIZE * this.state.bet) && <Sound audio='jackpot' />}
          {(winner && prize === CONSEC_PRIZE * this.state.bet) && <Sound audio='win' />}
          {(winner && prize === NON_CONSEC_PRIZE * this.state.bet) && <Sound audio='coin'/>}
          {lose &&
            <React.Fragment>
              <div className="loser">Try Again!</div>
              <Sound audio='fail' />
            </React.Fragment>
          }
        </div>

      </React.Fragment>
    )
  }
}

export default SlotMachine
