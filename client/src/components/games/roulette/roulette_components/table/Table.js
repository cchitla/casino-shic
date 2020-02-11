import React from 'react';
import './Table.css';
import Chip from '../chips/Chips';


class RouletteTable extends React.Component {

  state = {
    nums: [],
    //numChildren: 0,
    currentNumber: 0,
    coins: this.props.coins,
    chip: this.props.chip,
    message: "",
    /* JSONS ROWS */
    firstRow: this.props.firstRow,
    firstBorder: this.props.firstBorder,
    secondRow: this.props.secondRow,
    secondBorder: this.props.secondBorder,
    thirdRow: this.props.thirdRow,
    thirdBorder: this.props.thirdBorder,
    fourthRow: this.props.fourthRow,
    fifthRow: this.props.fifthRow,
    columnLeft: this.props.columnLeft,
    columnRight: this.props.columnRight
    /* END JSONS ROWS */
  }

  

  componentDidMount() {

    this.numsSelectionHandler = (num, whichRow) => { //selecting bets

      
      if (this.props.arr === []) {
        this.setState({nums: []})
      }
      

      let nums = [...this.state.nums]; //spreading array of bets for furter use
      let row = [...this.state[whichRow]]
      let coins;

      if (nums.indexOf(num) >= 0) { //if number is present in array, deselect it

        nums.splice(nums.indexOf(num), 1); // if deselect take it out of aray
        //calcolate coins
        coins = this.state.coins + this.state.chip;
        /* CHIPS HANDLING */
        let updatedRow = row.map(chip => {
          if (chip.n == num) {
            chip.visible = false
          }
          return chip
        })
        this.props.updateRow(whichRow, updatedRow)

        this.setState({ [whichRow]: updatedRow }); //take the chip out of number

        /* END CHIPS HANDLING */

      } else if (nums.indexOf(num) === -1) {
        //calcolate coins
        coins = this.state.coins - this.state.chip;
        nums.push(num);
        let updatedRow = row.map(chip => {
          if (chip.n == num) {
            chip.visible = true
          }
          return chip
        })

        this.setState({ [whichRow]: updatedRow });
        //this.setState({ numChildren: this.state.numChildren + 1, [whichRow]: updatedRow });
      }

      /* ARRAY OF BETS HANDLING */
      this.setState({ nums: nums }, () => { this.props.updateArr(nums) });

      /* END ARRAY OF BETS HANDLING */

      /* COINS HANDLING */

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


        <div className="d-flex flex-row align-items-start roulette-table">
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
            <div className="table-divider"></div>
            {/* First row */}
            <ul className="d-flex list-unstyled">
              {
                this.state.firstRow.map((num, index, arr) =>
                  <button
                    key={num.n + index + arr}
                    className={num.className}
                    value={num.n}
                    onClick={() => this.numsSelectionHandler(num.n, "firstRow")}>
                    <Chip
                      id={num.n}
                      active={num.visible} />
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
                    onClick={() => this.numsSelectionHandler(num.n, "firstBorder")}>
                    <Chip
                      id={num.n}
                      active={num.visible} />
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
                    onClick={() => this.numsSelectionHandler(num.n, "secondRow")}>
                    <Chip
                      id={num.n}
                      active={num.visible} />
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
                    onClick={() => this.numsSelectionHandler(num.n, "secondBorder")}>
                    <Chip
                      id={num.n}
                      active={num.visible} />
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
                    onClick={() => this.numsSelectionHandler(num.n, "thirdRow")}>
                    <Chip
                      id={num.n}
                      active={num.visible} />
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
                    onClick={() => this.numsSelectionHandler(num.n, "thirdBorder")}>
                    <Chip
                      id={num.n}
                      active={num.visible} />
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
                    onClick={() => this.numsSelectionHandler(num.n, "fourthRow")}
                    disabled={num.disabled}
                  >
                    <Chip
                      id={num.n}
                      active={num.visible} />
                  </button>)
              }
            </ul>
            <div className="table-divider"></div>
            {/* Fifth row */}
            <ul className="d-flex list-unstyled">
              {
                this.state.fifthRow.map((num, index, arr) =>
                  <button
                    key={num.n + index + arr}
                    className={num.className}
                    value={num.n}
                    onClick={() => this.numsSelectionHandler(num.n, "fifthRow")}>
                   <Chip
                      id={num.n}
                      active={num.visible} />
                  </button>)
              }
            </ul>
            <div className="table-divider"></div>
          </div>
          <div className="align-self-start">
            <div className="table-divider"></div>
            <ul className="list-unstyled">
              {
                this.state.columnRight.map((num, index, arr) =>
                  <li className={num.className}
                    key={num.n + index + arr}>
                    <button
                      className="blues"
                      value={num.n}
                      onClick={() => this.numsSelectionHandler(num.n, "columnRight")}>
                      <Chip
                      id={num.n}
                      active={num.visible} />
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