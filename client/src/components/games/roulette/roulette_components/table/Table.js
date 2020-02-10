import React from 'react';
import './Table.css';
import Chip from '../chips/Chips';
import firstRow from './rows/FirstRow.json';
import firstBorder from './rows/FirstBorder.json';
import secondRow from './rows/SecondRow.json';
import secondBorder from './rows/SecondBorder.json';
import thirdRow from './rows/ThirdRow.json';
import thirdBorder from './rows/ThirdBorder.json';
import fourthRow from './rows/FourthRow.json';
import fifthRow from './rows/FifthRow.json';
import columnLeft from './rows/ColumnLeft.json';
import columnRight from './rows/ColumnRight.json';

class RouletteTable extends React.Component {

  state = {
    nums: [],
    numChildren: 0,
    currentNumber: 0,
    coins: this.props.coins,
    chip: this.props.chip,
    message: "",
    /* JSONS ROWS */
    firstRow: firstRow,
    firstBorder: firstBorder,
    secondRow: secondRow,
    secondBorder: secondBorder,
    thirdRow: thirdRow,
    thirdBorder: thirdBorder,
    fourthRow: fourthRow,
    fifthRow: fifthRow,
    columnLeft: columnLeft,
    columnRight: columnRight
    /* END JSONS ROWS */
  }



  componentDidMount() {

    this.numsSelectionHandler = (num) => { //selecting bets

      let nums = [...this.state.nums]; //spreading array of bets for furter use

      if (nums.indexOf(num) >= 0) { //if number is present in array, deselect it

        nums.splice(nums.indexOf(num), 1); // if deselect take it out of aray

        /* CHIPS HANDLING */

        this.setState({ numChildren: this.state.numChildren - 1 }); //take the chip out of number

        /* END CHIPS HANDLING */

      } else if (nums.indexOf(num) === -1) {
        nums.push(num);
        this.setState({ numChildren: this.state.numChildren + 1 });
      }

      /* ARRAY OF BETS HANDLING */
      this.setState({ nums: nums }, () => { this.props.updateArr(nums) });

      /* END ARRAY OF BETS HANDLING */

      /* COINS HANDLING */

      //calcolate coins
      let coins = this.state.coins - this.state.chip;

      //update coins in rulette
      this.setState({ coins: coins }, () => { this.props.updateCoins(coins) })

      /* END COINS HANDLING */
    }
  }

  noBetsOnZero() {
    this.setState({ message: "No bet on zeros!" })
  }

  render() {

    return (
      <React.Fragment>
        <div className="d-flex flex-row align-items-start">
          <div className="align-self-start">
            <ul className="list-unstyled pt-6">
              {
                this.state.columnLeft.map((num, index, arr) =>
                  <li
                    key={num.n + index + arr}
                    className={num.className + " no-cursor"}
                    value={num.n}
                    onClick={() => this.noBetsOnZero()}
                  >
                    {num.n}
                  </li>)
              }
            </ul>
          </div>
          <div className="align-self-start">
            <div className="divider"></div>
            {/* First row */}
            <ul className="d-flex list-unstyled">
              {
                this.state.firstRow.map((num, index, arr) =>
                  <button
                    key={num.n + index + arr}
                    className={num.className}
                    value={num.n}
                    onClick={() => this.numsSelectionHandler(num.n)}>
                    {<Chip
                      id={num.n}
                      active={this.state.nums.includes(num.n) ? true : false}
                      selArr={this.props.removeChips ? [] : this.state.nums}
                      numChildren={this.state.numChildren}
                      removeChips={this.props.removeChips} />}
                  </button>)
              }
            </ul>
            {/* Between first and second rows borders */}
            <ul className="d-flex list-unstyled">
              {
                this.state.firstBorder.map((num, index, arr) =>
                  <button
                    key={num.n + index + arr}
                    className={num.className}
                    value={num.n}
                    onClick={() => this.numsSelectionHandler(num.n)}>
                    {<Chip
                      id={num.n}
                      active={this.state.nums.includes(num.n) ? true : false}
                      selArr={this.props.removeChips ? [] : this.state.nums}
                      numChildren={this.state.numChildren}
                      removeChips={this.props.removeChips} />}
                  </button>)
              }
            </ul>
            {/* Second row */}
            <ul className="d-flex list-unstyled">
              {
                this.state.secondRow.map((num, index, arr) =>
                  <button
                    key={num.n + index + arr}
                    className={num.className}
                    value={num.n}
                    onClick={() => this.numsSelectionHandler(num.n)}>
                    {<Chip
                      id={num.n}
                      active={this.state.nums.includes(num.n) ? true : false}
                      selArr={this.props.removeChips ? [] : this.state.nums}
                      numChildren={this.state.numChildren}
                      removeChips={this.props.removeChips} />}
                  </button>)
              }
            </ul>
            {/* Between second and thirs rows borders */}
            <ul className="d-flex list-unstyled">
              {
                this.state.secondBorder.map((num, index, arr) =>
                  <button
                    key={num.n + index + arr}
                    className={num.className}
                    value={num.n}
                    onClick={() => this.numsSelectionHandler(num.n)}>
                    {<Chip
                      id={num.n}
                      active={this.state.nums.includes(num.n) ? true : false}
                      selArr={this.props.removeChips ? [] : this.state.nums}
                      numChildren={this.state.numChildren}
                      removeChips={this.props.removeChips} />}
                  </button>)
              }
            </ul>
            {/* Third row */}
            <ul className="d-flex list-unstyled">
              {
                this.state.thirdRow.map((num, index, arr) =>
                  <button
                    key={num.n + index + arr}
                    className={num.className}
                    value={num.n}
                    onClick={() => this.numsSelectionHandler(num.n)}>
                    {<Chip
                      id={num.n}
                      active={this.state.nums.includes(num.n) ? true : false}
                      selArr={this.props.removeChips ? [] : this.state.nums}
                      numChildren={this.state.numChildren}
                      removeChips={this.props.removeChips} />}
                  </button>)
              }
            </ul>
            {/* Between second and thirs rows borders */}
            <ul className="d-flex list-unstyled">
              {
                this.state.thirdBorder.map((num, index, arr) =>
                  <button
                    key={num.n + index + arr}
                    className={num.className}
                    value={num.n}
                    onClick={() => this.numsSelectionHandler(num.n)}>
                    {<Chip
                      id={num.n}
                      active={this.state.nums.includes(num.n) ? true : false}
                      selArr={this.props.removeChips ? [] : this.state.nums}
                      numChildren={this.state.numChildren}
                      removeChips={this.props.removeChips} />}
                  </button>)
              }
            </ul>
            {/* Fourth row */}
            <ul className="d-flex list-unstyled">
              {
                this.state.fourthRow.map((num, index, arr) =>
                  <button
                    key={num.n + index + arr}
                    className={num.className}
                    value={num.n}
                    onClick={() => this.numsSelectionHandler(num.n)}
                    disabled={num.disabled}
                  >
                    {<Chip
                      id={num.n}
                      active={this.state.nums.includes(num.n) ? true : false}
                      selArr={this.props.removeChips ? [] : this.state.nums}
                      numChildren={this.state.numChildren}
                      removeChips={this.props.removeChips} />}
                  </button>)
              }
            </ul>
            <div className="divider"></div>
            {/* Fifth row */}
            <ul className="d-flex list-unstyled">
              {
                this.state.fifthRow.map((num, index, arr) =>
                  <button
                    key={num.n + index + arr}
                    className={num.className}
                    value={num.n}
                    onClick={() => this.numsSelectionHandler(num.n)}>
                    {<Chip
                      id={num.n}
                      active={this.state.nums.includes(num.n) ? true : false}
                      selArr={this.props.removeChips ? [] : this.state.nums}
                      numChildren={this.state.numChildren}
                      removeChips={this.props.removeChips} />}
                  </button>)
              }
            </ul>
            <div className="divider"></div>
          </div>
          <div className="align-self-start">
            <div className="divider"></div>
            <ul className="list-unstyled">
              {
                this.state.columnRight.map((num, index, arr) =>
                  <li className={num.className}
                    key={num.n + index + arr}>
                    <button
                      className="blues"
                      value={num.n}
                      onClick={() => this.numsSelectionHandler(num.n)}>
                      {<Chip
                        id={num.n}
                        active={this.state.nums.includes(num.n) ? true : false}
                        selArr={this.props.removeChips ? [] : this.state.nums}
                        numChildren={this.state.numChildren}
                        removeChips={this.props.removeChips} />}
                    </button>
                  </li>
                )
              }
            </ul>
          </div>
        </div >
        <div className="text-gold text-center mt-3">{this.state.message}</div>
      </React.Fragment>

    )
  }


}

export default RouletteTable;



// componentDidMount() {

//   this.numsSelectionHandler = (num) => {

//     let nums = [...this.state.nums];



//     if (nums.indexOf(num) >= 0) {

//       nums.splice(nums.indexOf(num), 1);


//       /* CHIPS HANDLING */

//       this.setState({ numChildren: 0 }); //no chip on number

//       this.props.updateChipVisibility(false); //update in roulette.js

//       if (nums.indexOf(num) === -1) {
//         this.setState({ selected: false }); 
//       }

//       /* END CHIPS HANDLING */

//     } else if (nums.indexOf(num) === -1)  {

//       this.setState(prevState => ({ selected: !prevState.selected }));
//       this.setState({ selected: true });

//       this.setState({ selected: true });

//       this.props.updateChipVisibility(true);

//       nums.push(num);

//       this.setState({
//         numChildren: this.state.numChildren + 1
//       });
//     }

//     /* ARRAY OF BETS HANDLING */
//     this.setState({ nums: nums }, () => {
//       this.props.updateArr(nums)
//     })

//     /* END ARRAY OF BETS HANDLING */

//     /* COINS HANDLING */

//     //calcolate coins
//     let coins = this.state.coins - this.state.chip;

//     //update coins in rulette
//     this.setState({ coins: coins }, () => {
//       this.props.updateCoins(coins)
//     })

//     /* END COINS HANDLING */
//   }
// }