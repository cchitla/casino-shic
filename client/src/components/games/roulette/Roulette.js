import React from 'react';
import './Roulette.css';
import Weel from './roulette_components/weel/Weel';
import RouletteTable from './roulette_components/table/Table';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { GiDiamonds } from 'react-icons/gi';
import axios from 'axios';
import API from "../../../utils/API";
import { useAuth0 } from "../../auth/auth0/Auth0";
import firstRow from './roulette_components/table/rows/FirstRow.json';
import firstBorder from './roulette_components/table/rows/FirstBorder.json';
import secondRow from './roulette_components/table/rows/SecondRow.json';
import secondBorder from './roulette_components/table/rows/SecondBorder.json';
import thirdRow from './roulette_components/table/rows/ThirdRow.json';
import thirdBorder from './roulette_components/table/rows/ThirdBorder.json';
import fourthRow from './roulette_components/table/rows/FourthRow.json';
import fifthRow from './roulette_components/table/rows/FifthRow.json';
import columnLeft from './roulette_components/table/rows/ColumnLeft.json';
import columnRight from './roulette_components/table/rows/ColumnRight.json';


class Roulette extends React.Component {
  state = {
    num: '',
    arr: [],
    count: 0,
    wins: 0,
    chip: 10,
    coins: 0,
    losses: 0,
    message: "Spin the weel!",
    extArr: [],
    removeChips: false,
    reset: false,
    firstRow, firstBorder, secondRow, secondBorder, thirdRow, thirdBorder, fourthRow, fifthRow, columnLeft, columnRight

  }

  twoByOneFirst = ["3", "6", "2", "12", "15", "18", "21", "24", "27", "30", "33", "36"];
  twoByOneSecond = ["2", "5", "8", "11", "14", "17", "20", "23", "26", "29", "32", "35"];
  twoByOneThird = ["1", "4", "7", "10", "13", "16", "19", "22", "25", "28", "31", "34"];
  firstTwelves = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  secondTwelves = ["13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"];
  thirdTwelves = ["25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36"];
  oneToEighteen = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"];
  nineteenToThirtySix = ["19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36"];
  black = ["2", "4", "6", "8", "10", "11", "13", "15", "17", "20", "22", "24", "26", "28", "29", "31", "33", "35"];
  red = ['1', '3', '5', '7', '9', '12', '14', '16', '18', '19', '21', '23', '25', '27', '30', '32', '34', '36'];
  even = ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36"];
  odd = ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '31', '33', '35'];


  componentDidMount() {
    API.getOnePlayer(this.props.user.email)
      .then(res => {
        this.setState({
          count: res.data.wins.roulette.totalGames,
          wins: res.data.wins.roulette.wins,
          coins: res.data.earnings,
          losses: (res.data.wins.roulette.totalGames - res.data.wins.roulette.wins)
        });
        console.log(this.state.wins, this.state.count, this.props.user.email, res.data.wins.roulette.wins, res.data.earnings);
        console.log(res);

      })
      .catch(err => console.log(err));
  }


  userLost = () => {
    console.log("============ LOOSING ===============");
    console.log("looser");
    this.setState({
      message: `You loose :(`,
      losses: this.state.losses + 1,
      reset: true
    });
    console.log("========== END LOOSING =============");


    let data = {
      "wins.roulette.totalGames": this.state.count + 1,
      earnings: this.state.coins
    }

    API.updatePlayer(this.props.user.email, data)
      .then(res => { console.log(res.data) })
      .catch(err => console.log(err));

    this.resetGame();
  }

  userWin = (multi) => {
    console.log("============ WINNING ===============");
    console.log("winner");
    this.setState({
      message: `You win! :)`,
      wins: this.state.wins + 1,
      coins: this.state.coins + (multi * parseInt(this.state.chip)),
      reset: true
    });


    console.log("========== END WINNING =============");


    let data = {
      "wins.roulette.totalGames": this.state.count + 1,
      "wins.roulette.wins": this.state.count + 1,
      earnings: this.state.coins
    }

    API.updatePlayer(this.props.user.email, data)
      .then(res => { console.log(res.data) })
      .catch(err => console.log(err));

    this.resetGame();
  }

  resetGame = () => {
    this.setState({
      arr: [],
      num: "",
      firstRow: firstRow.map(num => {
        num.visible = false
        return num;
      }),
      firstBorder: firstBorder.map(num => {
        num.visible = false
        return num;
      }),
      secondRow: secondRow.map(num => {
        num.visible = false
        return num;
      }),
      secondBorder: secondBorder.map(num => {
        num.visible = false
        return num;
      }),
      thirdRow: thirdRow.map(num => {
        num.visible = false
        return num;
      }),
      thirdBorder: thirdBorder.map(num => {
        num.visible = false
        return num;
      }),
      fourthRow: fourthRow.map(num => {
        num.visible = false
        return num;
      }),
      columnLeft: columnLeft.map(num => {
        num.visible = false
        return num;
      }),
      columnRight: columnRight.map(num => {
        num.visible = false
        return num;
      })
    });
  }


  determineValidBets = (length, element, num, multiplier) => {
    let extArr = [...this.state.extArr];
    let lunghezza = element.length;
    if (lunghezza === length) { //split nums
      let filtering = element.filter(isItMyNum => isItMyNum == num);
      if (filtering == num) {
        extArr.push(num);
        this.setState({ extArr });
        this.userWin(multiplier);
        console.log(this.state.extArr);
      }
    }
  }

  determineValidBetsColFive = (name, element, arrName, num, multiplier) => {
    let extArr = [...this.state.extArr];
    if (element === name) {
      let filtered = arrName.filter(item => item == num);
      if (filtered == num) {
        extArr.push(num);
        this.setState({ extArr })
        this.userWin(multiplier)
        console.log(this.state.extArr);
      }
    }
  }

  updateNum = (num) => {

    this.setState({ num, count: this.state.count + 1 });

    if (num !== "") {
      this.setState({ removeChips: true })
    }

    this.state.arr.map(item => {

      if (item === num) { //if it's just a single number
        this.userWin(35);
      }

      if (typeof item !== "string") { //here gonna filter the mini-arrays 

        this.determineValidBets(2, item, num, 17);
        this.determineValidBets(3, item, num, 11);
        this.determineValidBets(4, item, num, 8);
        this.determineValidBets(6, item, num, 5);

      } else {
        this.determineValidBetsColFive("Even", item, this.even, num, 1);
        this.determineValidBetsColFive("Odd", item, this.odd, num, 1);
        this.determineValidBetsColFive("Black", item, this.black, num, 1);
        this.determineValidBetsColFive("Red", item, this.red, num, 1);
        this.determineValidBetsColFive("1 to 18", item, this.oneToEighteen, num, 1);
        this.determineValidBetsColFive("19 to 36", item, this.nineteenToThirtySix, num, 1);
        this.determineValidBetsColFive("3rd 12", item, this.thirdTwelves, num, 1);
        this.determineValidBetsColFive("2nd 12", item, this.secondTwelves, num, 1);
        this.determineValidBetsColFive("1st 12", item, this.firstTwelves, num, 1);
        this.determineValidBetsColFive("2:1:1", item, this.twoByOneFirst, num, 2);
        this.determineValidBetsColFive("2:1:2", item, this.twoByOneSecond, num, 2);
        this.determineValidBetsColFive("2:1:3", item, this.twoByOneThird, num, 2);
      }

    })


    if (this.state.extArr.length === 0) {
      this.userLost();
    }

  }

  updateArr = (arr) => {
    this.setState({ arr })
  }

  updateCoins = (coins) => {
    this.setState({ coins })
  }

  updateRow = (row, val) => {
    this.setState({ [row]: val })
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Container fluid className="table">
            <Row className="align-items-center">
              <Col className="mx-5">
                <RouletteTable
                  firstRow={this.state.firstRow}
                  firstBorder={this.state.firstBorder}
                  secondRow={this.state.secondRow}
                  secondBorder={this.state.secondBorder}
                  thirdRow={this.state.thirdRow}
                  thirdBorder={this.state.thirdBorder}
                  fourthRow={this.state.fourthRow}
                  fifthRow={this.state.fifthRow}
                  columnLeft={this.state.columnLeft}
                  columnRight={this.state.columnRight}
                  updateRow={this.updateRow}
                  reset={this.state.reset}
                  updateArr={this.updateArr}
                  updateCoins={this.updateCoins}
                  updateRemove={this.updateRemove}
                  num={this.state.num}
                  arr={this.state.arr}
                  count={this.state.count}
                  coins={this.state.coins}
                  chip={this.state.chip}
                  removeChips={this.state.removeChips}
                />
                <Row className="bg-red bg-verdict">
                  <Col md={3} className="d-flex align-items-center flex-column">
                    <Image src="/resources/roulette_logo.png" alt="Casino S.C.I.C" className="img-fluid" />
                    <h6>Your coins: <span>{this.state.coins}</span></h6>
                  </Col>
                  <Col md={8}>
                    <div className="text-center mt-2">
                      <h4 className="text-uppercase">{this.state.message}</h4>
                    </div>
                    <div className="text-center mt-2">

                      <h6>Your bets: <span>{this.state.arr.join(", ")}</span></h6>

                      <div className="divider-line divider-line-center divider-line-linear-gradient w-100 mx-auto mt-2">
                        <GiDiamonds className="diamond-line-icon" />
                      </div>
                      <ul className="list-inline">
                        <li className="list-inline-item">Spins: {this.state.count}</li>
                        <li className="list-inline-item">Wins: {this.state.wins}</li>
                        <li className="list-inline-item">Losses: {this.state.losses}</li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col className="align-self-center">
                <Weel
                  updateNum={this.updateNum}
                  num={this.state.num}
                  arr={this.state.arr}
                  count={this.state.count}
                  updateRemove={this.updateRemove}
                />
              </Col>
            </Row>
          </Container>
        </Row>
      </React.Fragment>
    )
  }
}

export default Roulette;



  //STILL NEED TO CREATE FUNCTIONALITY FOR 

  //Basket, or a five number bet, and allows players to bet on the zero, double zero, 1, 2, and 3. Payout – 6:1.

