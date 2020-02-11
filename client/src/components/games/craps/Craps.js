import React, { useState, useEffect } from 'react';
import Dice from './dice';
import Table from './table';
import './craps.css';
import { Row, Col } from 'react-bootstrap';
import API from '../../../utils/API';

const Craps = (props) => {
  const [earnings, setEarnings] = useState(0);
  const [betTotal, setBetTotal] = useState(0);
  const [wins, setWins] = useState(0);
  const [totalGames, setTotalGames] = useState(0);
  const [d1, setD1] = useState(0);
  const [d2, setD2] = useState(0);
  const [diceTotal, setDiceTotal] = useState(0);
  const [puckText, setPuckText] = useState([
    {
      text: "",
      className: "puckHidden"
    }, {
      text: "",
      className: "puckHidden"
    }, {
      text: "",
      className: "puckHidden"
    }, {
      text: "",
      className: "puckHidden"
    }, {
      text: "",
      className: "puckHidden"
    }, {
      text: "",
      className: "puckHidden"
    }]);
  const [point, setPoint] = useState(0);
  const [isComeOut, setIsComeOut] = useState(true);
  const [betOptions, setBetOptions] = useState([
    {
      name: "passLine",
      isBetPlaced: false,
      amount: 0,
      chipsClass: "noBetPlaced"
    }, {
      name: "dontPass",
      isBetPlaced: false,
      amount: 0,
      chipsClass: "noBetPlaced"
    }, {
      name: "passOdds",
      isBetPlaced: false,
      amount: 0
    }, {
      name: "dontPassOdds",
      isBetPlaced: false,
      amount: 0
    }, {
      name: "comeLine",
      isBetPlaced: false,
      amount: 0,
      chipsClass: "noBetPlaced"
    }, {
      name: "dontCome",
      isBetPlaced: false,
      amount: 0,
      chipsClass: "noBetPlaced"
    }, {
      name: "big8",
      isBetPlaced: false,
      amount: 0,
      chipsClass: "noBetPlaced"
    }, {
      name: "big6",
      isBetPlaced: false,
      amount: 0,
      chipsClass: "noBetPlaced"
    }, {
      name: "buyNum4",
      isBetPlaced: false,
      amount: 0,
      chipsClass: "noBetPlaced"
    }, {
      name: "buyNum5",
      isBetPlaced: false,
      amount: 0,
      chipsClass: "noBetPlaced"
    }, {
      name: "buyNum6",
      isBetPlaced: false,
      amount: 0,
      chipsClass: "noBetPlaced"
    }, {
      name: "buyNum8",
      isBetPlaced: false,
      amount: 0,
      chipsClass: "noBetPlaced"
    }, {
      name: "buyNum9",
      isBetPlaced: false,
      amount: 0,
      chipsClass: "noBetPlaced"
    }, {
      name: "buyNum10",
      isBetPlaced: false,
      amount: 0,
      chipsClass: "noBetPlaced"
    }, {
      name: "field",
      isBetPlaced: false,
      amount: 0,
      chipsClass: "noBetPlaced"
    }])

  useEffect(() => {
    API
      .getOnePlayer(props.user.email)
      // .then(res => { console.log(res.data) })
      .then(res => {
        setEarnings(res.data.earnings);
        setWins(res.data.wins.craps.wins);
        setTotalGames(res.data.wins.craps.totalGames)
      })
      .then(() => {
        console.log("earnings:", earnings, ", wins: ", wins, ", total games played: ", totalGames, "come out roll: ", isComeOut, "Point: ", point)
      });
  })

  useEffect(() => {
    console.log("useEffect on totalgame update");
    let userUpdate = {
      "earnings": earnings,
      "wins.craps.$.wins": wins,
      "totalGames": totalGames
    };

    API
      .updatePlayer(props.user.email, userUpdate)
      .then(res => { console.log(res.data) })
      .catch(err => console.log(err));
  }, [totalGames]);

  const handleBetPlacement = (e) => {
    console.log("handle bets", e.currentTarget.id);
    let newBetOptions = [...betOptions];

    if (e.currentTarget.id === "passLine") {
      if (isComeOut) {
        if (!newBetOptions[0].isBetPlaced) {
          newBetOptions[0].isBetPlaced = true;
          newBetOptions[0].chipsClass = "betPlaced";
        }
        newBetOptions[0].amount = newBetOptions[0].amount + 5;
        setBetOptions(newBetOptions);


      } else {
        console.log("that bet is unavailable")
      }

    } else if (e.currentTarget.id === "dontPass") {
      if (isComeOut) {
        if (!newBetOptions[1].isBetPlaced) {
          newBetOptions[1].isBetPlaced = true;
          newBetOptions[1].chipsClass = "betPlaced";
        }
        newBetOptions[1].amount = newBetOptions[1].amount + 5;
        setBetOptions(newBetOptions)
      } else {
        console.log("that bet is unavailable")
      }
    } else if (e.currentTarget.id === "passOdds") {
      // if passLine bet has been placed accept odds bet, otherwise reject
      if (!isComeOut) {
        if (betOptions[0].isBetPlaced) {
          if (!newBetOptions[2].isBetPlaced) {
            newBetOptions[2].isBetPlaced = true;
            newBetOptions[2].chipsClass = "betPlaced";
          }
          newBetOptions[2].amount = newBetOptions[2].amount + 5;
          setBetOptions(newBetOptions);
        } else if (!betOptions[0].isBetPlaced) {
          console.log("you can't bet Odds on Pass Line unless you have placed a pass line bet")
        }
      }
    } else if (e.currentTarget.id === "dontPassOdds") {
      // if dontPass bet has been placed accept odds bet, otherwise reject
      if (!isComeOut) {
        if (betOptions[1].isBetPlaced) {
          if (!newBetOptions[3].isBetPlaced) {
            newBetOptions[3].isBetPlaced = true;
            newBetOptions[3].chipsClass = "betPlaced";
          }
          newBetOptions[3].amount = newBetOptions[3].amount + 5;
          setBetOptions(newBetOptions);
        } else if (!betOptions[1].isBetPlaced) {
          console.log("you can't bet Odds on Don't Pass unless you have places a don't pass bet")
        }
      }
    } else if (e.currentTarget.id === "come") {
      if (!isComeOut) {
        if (!newBetOptions[4].isBetPlaced) {
          newBetOptions[4].isBetPlaced = true;
          newBetOptions[4].chipsClass = "betPlaced";
        }
        newBetOptions[4].amount = newBetOptions[4].amount + 5;
        setBetOptions(newBetOptions);
      } else {
        console.log("that bet is unavailable")
      }
    } else if (e.currentTarget.id === "dontCome") {
      if (!isComeOut) {
        if (!newBetOptions[5].isBetPlaced) {
          newBetOptions[5].isBetPlaced = true;
          newBetOptions[5].chipsClass = "betPlaced";
        }
        newBetOptions[5].amount = newBetOptions[5].amount + 5;
        setBetOptions(newBetOptions);
      } else {
        console.log("that bet is unavailable")
      }
    } else if (e.currentTarget.id === "buyNum4") {
      if (!isComeOut) {
        if (!newBetOptions[8].isBetPlaced) {
          newBetOptions[8].isBetPlaced = true;
          newBetOptions[8].chipsClass = "betPlaced";
        }
        newBetOptions[8].amount = newBetOptions[8].amount + 5;
        setBetOptions(newBetOptions);
      } else {
        console.log("that bet is unavailable")
      }
    } else if (e.currentTarget.id === "buyNum5") {
      if (!isComeOut) {
        if (!newBetOptions[9].isBetPlaced) {
          newBetOptions[9].isBetPlaced = true;
          newBetOptions[9].chipsClass = "betPlaced";
        }
        newBetOptions[9].amount = newBetOptions[9].amount + 5;
        setBetOptions(newBetOptions);
      } else {
        console.log("that bet is unavailable")
      }
    } else if (e.currentTarget.id === "buyNum6") {
      if (!isComeOut) {
        if (!newBetOptions[10].isBetPlaced) {
          newBetOptions[10].isBetPlaced = true;
          newBetOptions[10].chipsClass = "betPlaced";
        }
        newBetOptions[10].amount = newBetOptions[10].amount + 5;
        setBetOptions(newBetOptions);
      } else {
        console.log("that bet is unavailable")
      }
    } else if (e.currentTarget.id === "buyNum8") {
      if (!isComeOut) {
        if (!newBetOptions[11].isBetPlaced) {
          newBetOptions[11].isBetPlaced = true;
          newBetOptions[11].chipsClass = "betPlaced";
        }
        newBetOptions[11].amount = newBetOptions[11].amount + 5;
        setBetOptions(newBetOptions);
      } else {
        console.log("that bet is unavailable")
      }
    } else if (e.currentTarget.id === "buyNum9") {
      if (!isComeOut) {
        if (!newBetOptions[12].isBetPlaced) {
          newBetOptions[12].isBetPlaced = true;
          newBetOptions[12].chipsClass = "betPlaced";
        }
        newBetOptions[12].amount = newBetOptions[12].amount + 5;
        setBetOptions(newBetOptions);
      } else {
        console.log("that bet is unavailable")
      }
    } else if (e.currentTarget.id === "buyNum10") {
      if (!isComeOut) {
        if (!newBetOptions[13].isBetPlaced) {
          newBetOptions[13].isBetPlaced = true;
          newBetOptions[13].chipsClass = "betPlaced";
        }
        newBetOptions[13].amount = newBetOptions[13].amount + 5;
        setBetOptions(newBetOptions);
      } else {
        console.log("that bet is unavailable")
      }
    } else if (e.currentTarget.id === "big8") {
      if (!isComeOut) {
        if (!newBetOptions[6].isBetPlaced) {
          newBetOptions[6].isBetPlaced = true;
          newBetOptions[6].chipsClass = "betPlaced";
        }
        newBetOptions[6].amount = newBetOptions[6].amount + 5;
        setBetOptions(newBetOptions);
      } else {
        console.log("that bet is unavailable")
      }
    } else if (e.currentTarget.id === "big6") {
      if (!isComeOut) {
        if (!newBetOptions[7].isBetPlaced) {
          newBetOptions[7].isBetPlaced = true;
          newBetOptions[7].chipsClass = "betPlaced";
        }
        newBetOptions[7].amount = newBetOptions[7].amount + 5;
        setBetOptions(newBetOptions);
      } else {
        console.log("that bet is unavailable")
      }
    } else if (e.currentTarget.id === "field") {

      if (!newBetOptions[14].isBetPlaced) {
        newBetOptions[14].isBetPlaced = true;
        newBetOptions[14].chipsClass = "betPlaced";
      }
      newBetOptions[14].amount = newBetOptions[14].amount + 5;
      setBetOptions(newBetOptions);
    } else {
      console.log("you've run out of options")
    }

    // total amount of money bet
    let betsArr = [];
    betOptions.forEach(option => {
      betsArr.push(option.amount)
    });
    let betsArrTotal = betsArr.reduce((a, b) => { return a + b });
    setBetTotal(betsArrTotal);
    console.log("betoptions", betOptions);
  }

  const handleDiceRoll = async () => {
    setDiceTotal(0);
    const a = await Math.floor(Math.random() * 6) + 1;
    const b = await Math.floor(Math.random() * 6) + 1;
    console.log(`a: ${a} and b: ${b}`);
    setD1(a);
    setD2(b);
    setDiceTotal(a + b);
  };

  useEffect(() => {
    console.log(diceTotal);
    let newBetOptions = [...betOptions];
    if (isComeOut) {
      switch (diceTotal) {
        case 7:

          // Pass Bet Wins on 7
          if (newBetOptions[0].isBetPlaced) {
            setEarnings(earnings + newBetOptions[0].amount); // pays 1 to 1
            setBetTotal(betTotal - newBetOptions[0].amount);
            newBetOptions[0].isBetPlaced = false;
            newBetOptions[0].chipsClass = "noBetPlaced";
            newBetOptions[0].amount = 0;
            setBetOptions(newBetOptions);
            setWins(wins + 1);
            setTotalGames(totalGames + 1);
            console.log("Pass Bet Wins on 7")
          }

          // Don't Pass Bet Loses on 7
          if (newBetOptions[1].isBetPlaced) {
            setEarnings(earnings - newBetOptions[1].amount);
            setBetTotal(betTotal - newBetOptions[1].amount);
            newBetOptions[1].isBetPlaced = false;
            newBetOptions[1].chipsClass = "noBetPlaced";
            newBetOptions[1].amount = 0;
            setBetOptions(newBetOptions);
            setTotalGames(totalGames + 1);
            console.log("Don't Pass Bet Loses on 7")
          }

          // Field Bet Loses on 7
          if (newBetOptions[14].isBetPlaced) {
            setEarnings(earnings - newBetOptions[14].amount);
            setBetTotal(betTotal - newBetOptions[14].amount);
            newBetOptions[14].isBetPlaced = false;
            newBetOptions[14].chipsClass = "noBetPlaced";
            newBetOptions[14].amount = 0;
            setBetOptions(newBetOptions);
            setTotalGames(totalGames + 1);
            console.log("Field Bet Loses on 7")
          }

          setBetTotal(0);
          break;

        case 11:
          // Pass Bet Wins on 11
          if (newBetOptions[0].isBetPlaced) {
            setEarnings(earnings + newBetOptions[0].amount); // pays 1 to 1
            setBetTotal(betTotal - newBetOptions[0].amount);
            newBetOptions[0].isBetPlaced = false;
            newBetOptions[0].chipsClass = "noBetPlaced";
            newBetOptions[0].amount = 0;
            setBetOptions(newBetOptions);
            setWins(wins + 1);
            setTotalGames(totalGames + 1);
            console.log("Pass Bet Wins on 11")
          }

          // Don't Pass Bet Loses on 11
          if (newBetOptions[1].isBetPlaced) {
            setEarnings(earnings - newBetOptions[1].amount);
            setBetTotal(betTotal - newBetOptions[1].amount);
            newBetOptions[1].isBetPlaced = false;
            newBetOptions[1].chipsClass = "noBetPlaced";
            newBetOptions[1].amount = 0;
            setBetOptions(newBetOptions);
            setTotalGames(totalGames + 1);
            console.log("Don't Pass Bet Loses on 11")
          }

          // Field Bet Loses on 11
          if (newBetOptions[14].isBetPlaced) {
            setEarnings(earnings - newBetOptions[14].amount);
            setBetTotal(betTotal - newBetOptions[14].amount);
            newBetOptions[14].isBetPlaced = false;
            newBetOptions[14].chipsClass = "noBetPlaced";
            newBetOptions[14].amount = 0;
            setBetOptions(newBetOptions);
            setTotalGames(totalGames + 1);
            console.log("Field Bet Loses on 11")
          }

          setBetTotal(0);
          break;

        case 2:

          // Pass Bet Loses on 2
          if (newBetOptions[0].isBetPlaced) {
            setEarnings(earnings - newBetOptions[0].amount);
            setBetTotal(betTotal - newBetOptions[0].amount);
            newBetOptions[0].isBetPlaced = false;
            newBetOptions[0].chipsClass = "noBetPlaced";
            newBetOptions[0].amount = 0;
            setBetOptions(newBetOptions);
            setTotalGames(totalGames + 1);
            console.log("Pass Bet Loses on 2")
          }

          // Don't Pass Bet Wins on 2
          if (newBetOptions[1].isBetPlaced) {
            setEarnings(earnings + newBetOptions[1].amount); // pays 1 to 1
            setBetTotal(betTotal - newBetOptions[1].amount);
            newBetOptions[1].isBetPlaced = false;
            newBetOptions[1].chipsClass = "noBetPlaced";
            newBetOptions[1].amount = 0;
            setBetOptions(newBetOptions);
            setWins(wins + 1);
            setTotalGames(totalGames + 1);
            console.log("Don't Pass Bet Wins on 2")
          }

          // Field Bet Wins on 2
          if (newBetOptions[14].isBetPlaced) {
            setEarnings(newBetOptions[14].amount * 2 + earnings); // pays 2 to 1
            setBetTotal(betTotal - newBetOptions[14].amount);
            newBetOptions[14].isBetPlaced = false;
            newBetOptions[14].chipsClass = "noBetPlaced";
            newBetOptions[14].amount = 0;
            setBetOptions(newBetOptions);
            setWins(wins + 1);
            setTotalGames(totalGames + 1);
            console.log("Field Bet Wins on 2")
          }

          setBetTotal(0);
          break;

        case 3:
          // Pass Bet Loses on 3
          if (newBetOptions[0].isBetPlaced) {
            setEarnings(earnings - newBetOptions[0].amount);
            setBetTotal(betTotal - newBetOptions[0].amount);
            newBetOptions[0].isBetPlaced = false;
            newBetOptions[0].chipsClass = "noBetPlaced";
            newBetOptions[0].amount = 0;
            setBetOptions(newBetOptions);
            setTotalGames(totalGames + 1);
            console.log("Pass Bet Loses on 3")
          }

          // Don't Pass Bet Wins on 3
          if (newBetOptions[1].isBetPlaced) {
            setEarnings(earnings + newBetOptions[1].amount); // pays 1 to 1
            setBetTotal(betTotal - newBetOptions[1].amount);
            newBetOptions[1].isBetPlaced = false;
            newBetOptions[1].chipsClass = "noBetPlaced";
            newBetOptions[1].amount = 0;
            setBetOptions(newBetOptions);
            setWins(wins + 1);
            setTotalGames(totalGames + 1);
            console.log("Don't Pass Bet Wins on 3")
          }

          // Field Bet Wins on 3
          if (newBetOptions[14].isBetPlaced) {
            setEarnings(earnings + newBetOptions[14].amount); // pays 1 to 1
            setBetTotal(betTotal - newBetOptions[14].amount);
            newBetOptions[14].isBetPlaced = false;
            newBetOptions[14].chipsClass = "noBetPlaced";
            newBetOptions[14].amount = 0;
            setBetOptions(newBetOptions);
            setWins(wins + 1);
            setTotalGames(totalGames + 1);
            console.log("Field Bet Wins on 3")
          }
          break;

        case 12:
          // Pass Bet Loses on 12
          if (newBetOptions[0].isBetPlaced) {
            setEarnings(earnings - newBetOptions[0].amount);
            setBetTotal(betTotal - newBetOptions[0].amount);
            newBetOptions[0].isBetPlaced = false;
            newBetOptions[0].chipsClass = "noBetPlaced";
            newBetOptions[0].amount = 0;
            setBetOptions(newBetOptions);
            setTotalGames(totalGames + 1);
            console.log("Pass Bet Loses on 12")
          }

          // Don't Pass Bet Pushes on 12
          if (newBetOptions[1].isBetPlaced) {
            setBetTotal(betTotal - newBetOptions[1].amount);
            newBetOptions[1].isBetPlaced = false;
            newBetOptions[1].chipsClass = "noBetPlaced";
            newBetOptions[1].amount = 0;
            setBetOptions(newBetOptions);
            setTotalGames(totalGames + 1);
            console.log("Don't Pass Bet Pushes on 12")
          }

          // Field Bet Wins on 12
          if (newBetOptions[14].isBetPlaced) {
            setEarnings(newBetOptions[14].amount * 3 + earnings); // pays 3 to 1
            setBetTotal(betTotal - newBetOptions[14].amount);
            newBetOptions[14].isBetPlaced = false;
            newBetOptions[14].chipsClass = "noBetPlaced";
            newBetOptions[14].amount = 0;
            setBetOptions(newBetOptions);
            setWins(wins + 1);
            setTotalGames(totalGames + 1);
            console.log("Field Bet Wins on 12")
          }
          break;

        case 4:
          console.log("point established")
          setIsComeOut(false);
          setPoint(4);
          let newPuckText0 = [...puckText];
          newPuckText0[0] = {
            text: "ON",
            className: "puckVisible"
          }
          setPuckText(newPuckText0);

          // Field Bet Wins on 4
          if (newBetOptions[14].isBetPlaced) {
            setEarnings(earnings + newBetOptions[14].amount); // pays 1 to 1
            setBetTotal(betTotal - newBetOptions[14].amount);
            newBetOptions[14].isBetPlaced = false;
            newBetOptions[14].chipsClass = "noBetPlaced";
            newBetOptions[14].amount = 0;
            setBetOptions(newBetOptions);
            setWins(wins + 1);
            setTotalGames(totalGames + 1);
            console.log("Field Bet Wins on 4")
          }
          break;

        case 5:
          console.log("point established")
          setIsComeOut(false);
          setPoint(5);
          let newPuckText1 = [...puckText];
          newPuckText1[1] = {
            text: "ON",
            className: "puckVisible"
          }
          setPuckText(newPuckText1);

          // Field Bet Loses on 5
          if (newBetOptions[14].isBetPlaced) {
            setEarnings(earnings - newBetOptions[14].amount);
            setBetTotal(betTotal - newBetOptions[14].amount);
            newBetOptions[14].isBetPlaced = false;
            newBetOptions[14].chipsClass = "noBetPlaced";
            newBetOptions[14].amount = 0;
            setBetOptions(newBetOptions);
            setTotalGames(totalGames + 1);
            console.log("Field Bet Loses on 5")
          }
          break;

        case 6:
          console.log("point established")
          setIsComeOut(false);
          setPoint(6);
          let newPuckText2 = [...puckText];
          newPuckText2[2] = {
            text: "ON",
            className: "puckVisible"
          }
          setPuckText(newPuckText2);

          // Field Bet Loses on 6
          if (newBetOptions[14].isBetPlaced) {
            setEarnings(earnings - newBetOptions[14].amount);
            setBetTotal(betTotal - newBetOptions[14].amount);
            newBetOptions[14].isBetPlaced = false;
            newBetOptions[14].chipsClass = "noBetPlaced";
            newBetOptions[14].amount = 0;
            setBetOptions(newBetOptions);
            setTotalGames(totalGames + 1);
            console.log("Field Bet Loses on 6")
          }
          break;

        case 8:
          console.log("point established")
          setIsComeOut(false);
          setPoint(8);
          let newPuckText3 = [...puckText];
          newPuckText3[3] = {
            text: "ON",
            className: "puckVisible"
          }
          setPuckText(newPuckText3);

          // Field Bet Loses on 8
          if (newBetOptions[14].isBetPlaced) {
            setEarnings(earnings - newBetOptions[14].amount);
            setBetTotal(betTotal - newBetOptions[14].amount);
            newBetOptions[14].isBetPlaced = false;
            newBetOptions[14].chipsClass = "noBetPlaced";
            newBetOptions[14].amount = 0;
            setBetOptions(newBetOptions);
            setTotalGames(totalGames + 1);
            console.log("Field Bet Loses on 8")
          }
          break;

        case 9:
          console.log("point established")
          setIsComeOut(false);
          setPoint(9);
          let newPuckText4 = [...puckText];
          newPuckText4[4] = {
            text: "ON",
            className: "puckVisible"
          }
          setPuckText(newPuckText4);

          // Field Bet Wins on 9
          if (newBetOptions[14].isBetPlaced) {
            setEarnings(earnings + newBetOptions[14].amount); // pays 1 to 1
            setBetTotal(betTotal - newBetOptions[14].amount);
            newBetOptions[14].isBetPlaced = false;
            newBetOptions[14].chipsClass = "noBetPlaced";
            newBetOptions[14].amount = 0;
            setBetOptions(newBetOptions);
            setWins(wins + 1);
            setTotalGames(totalGames + 1);
            console.log("Field Bet Wins on 9")
          }
          break;

        case 10:
          console.log("point established")
          setIsComeOut(false);
          setPoint(10);
          let newPuckText5 = [...puckText];
          newPuckText5[5] = {
            text: "ON",
            className: "puckVisible"
          }
          setPuckText(newPuckText5);

          // Field Bet Wins on 10
          if (newBetOptions[14].isBetPlaced) {
            setEarnings(earnings + newBetOptions[14].amount); // pays 1 to 1
            setBetTotal(betTotal - newBetOptions[14].amount);
            newBetOptions[14].isBetPlaced = false;
            newBetOptions[14].chipsClass = "noBetPlaced";
            newBetOptions[14].amount = 0;
            setBetOptions(newBetOptions);
            setWins(wins + 1);
            setTotalGames(totalGames + 1);
            console.log("Field Bet Wins on 10")
          }
          break;
      }
    } else if (!isComeOut) {
      console.log("come out is false")
      switch (diceTotal) {
        case 7:
          // Pass Bet Loses if 7 is Rolled Before Point
          if (newBetOptions[0].isBetPlaced) {
            setEarnings(earnings - newBetOptions[0].amount);
            setBetTotal(betTotal - newBetOptions[0].amount);
            newBetOptions[0].isBetPlaced = false;
            newBetOptions[0].chipsClass = "noBetPlaced";
            newBetOptions[0].amount = 0;
            setBetOptions(newBetOptions);
            setWins(wins + 1);
            setTotalGames(totalGames + 1);
            console.log("Pass Bet Loses if 7 is Rolled Before Point")
          }

          // Don't Pass Bet Wins if 7 is Rolled Before Point
          if (newBetOptions[1].isBetPlaced) {
            setEarnings(earnings + newBetOptions[1].amount); // Pays 1 to 1
            setBetTotal(betTotal - newBetOptions[1].amount);
            newBetOptions[1].isBetPlaced = false;
            newBetOptions[1].chipsClass = "noBetPlaced";
            newBetOptions[1].amount = 0;
            setBetOptions(newBetOptions);
            setWins(wins + 1);
            setTotalGames(totalGames + 1);
            console.log("Don't Pass Bet Loses on 7")
          }

          // Big 6 Bet Loses on 7
          if (newBetOptions[7].isBetPlaced) {
            setEarnings(earnings - newBetOptions[7].amount);
            setBetTotal(betTotal - newBetOptions[7].amount);
            newBetOptions[7].isBetPlaced = false;
            newBetOptions[7].chipsClass = "noBetPlaced";
            newBetOptions[7].amount = 0;
            setBetOptions(newBetOptions);
            setTotalGames(totalGames + 1);
            console.log("Big 6 Bet Loses on 7")
          }

          // Big 8 Bet Loses on 7
          if (newBetOptions[6].isBetPlaced) {
            setEarnings(earnings - newBetOptions[6].amount);
            setBetTotal(betTotal - newBetOptions[6].amount);
            newBetOptions[6].isBetPlaced = false;
            newBetOptions[6].chipsClass = "noBetPlaced";
            newBetOptions[6].amount = 0;
            setBetOptions(newBetOptions);
            setTotalGames(totalGames + 1);
            console.log("Big 8 Bet Loses on 7")
          }

          // Field Bet Loses on 7
          if (newBetOptions[14].isBetPlaced) {
            setEarnings(earnings - newBetOptions[14].amount);
            setBetTotal(betTotal - newBetOptions[14].amount);
            newBetOptions[14].isBetPlaced = false;
            newBetOptions[14].chipsClass = "noBetPlaced";
            newBetOptions[14].amount = 0;
            setBetOptions(newBetOptions);
            setTotalGames(totalGames + 1);
            console.log("Field Bet Loses on 7")
          }

          // Round Ends when a 7 is rolled
          setPuckText([
            {
              text: "",
              className: "puckHidden"
            }, {
              text: "",
              className: "puckHidden"
            }, {
              text: "",
              className: "puckHidden"
            }, {
              text: "",
              className: "puckHidden"
            }, {
              text: "",
              className: "puckHidden"
            }, {
              text: "",
              className: "puckHidden"
            }]);
          setIsComeOut(true);
          setBetTotal(0);
          break;

        case 11:
          // Field Bet Loses on 11
          if (newBetOptions[14].isBetPlaced) {
            setEarnings(earnings - newBetOptions[14].amount);
            setBetTotal(betTotal - newBetOptions[14].amount);
            newBetOptions[14].isBetPlaced = false;
            newBetOptions[14].chipsClass = "noBetPlaced";
            newBetOptions[14].amount = 0;
            setBetOptions(newBetOptions);
            setTotalGames(totalGames + 1);
            console.log("Field Bet Loses on 11")
          }
          break;

        case 2:
          // Field Bet Wins on 2
          if (newBetOptions[14].isBetPlaced) {
            setEarnings(newBetOptions[14].amount * 2 + earnings); // pays 2 to 1
            setBetTotal(betTotal - newBetOptions[14].amount);
            newBetOptions[14].isBetPlaced = false;
            newBetOptions[14].chipsClass = "noBetPlaced";
            newBetOptions[14].amount = 0;
            setBetOptions(newBetOptions);
            setWins(wins + 1);
            setTotalGames(totalGames + 1);
            console.log("Field Bet Wins on 2")
          }
          break;

        case 3:
          // Field Bet Wins on 3
          if (newBetOptions[14].isBetPlaced) {
            setEarnings(earnings + newBetOptions[14].amount); // pays 1 to 1
            setBetTotal(betTotal - newBetOptions[14].amount);
            newBetOptions[14].isBetPlaced = false;
            newBetOptions[14].chipsClass = "noBetPlaced";
            newBetOptions[14].amount = 0;
            setBetOptions(newBetOptions);
            setWins(wins + 1);
            setTotalGames(totalGames + 1);
            console.log("Field Bet Wins on 3")
          }
          break;

        case 12:
          // Field Bet Wins on 12
          if (newBetOptions[14].isBetPlaced) {
            setEarnings(newBetOptions[14].amount * 3 + earnings); // pays 3 to 1
            setBetTotal(betTotal - newBetOptions[14].amount);
            newBetOptions[14].isBetPlaced = false;
            newBetOptions[14].chipsClass = "noBetPlaced";
            newBetOptions[14].amount = 0;
            setBetOptions(newBetOptions);
            setWins(wins + 1);
            setTotalGames(totalGames + 1);
            console.log("Field Bet Wins on 12")
          }
          break;

        case 4:
          // Field Bet Wins on 4
          if (newBetOptions[14].isBetPlaced) {
            setEarnings(earnings + newBetOptions[14].amount); // pays 1 to 1
            setBetTotal(betTotal - newBetOptions[14].amount);
            newBetOptions[14].isBetPlaced = false;
            newBetOptions[14].chipsClass = "noBetPlaced";
            newBetOptions[14].amount = 0;
            setBetOptions(newBetOptions);
            setWins(wins + 1);
            setTotalGames(totalGames + 1);
            console.log("Field Bet Wins on 4")
          }

          if (point === 4) {
            // Pass Bet Wins if Point is Rolled Before 7
            if (newBetOptions[0].isBetPlaced) {
              setEarnings(earnings + newBetOptions[0].amount); // pays 1 to 1
              setBetTotal(betTotal - newBetOptions[0].amount);
              newBetOptions[0].isBetPlaced = false;
              newBetOptions[0].chipsClass = "noBetPlaced";
              newBetOptions[0].amount = 0;
              setBetOptions(newBetOptions);
              setWins(wins + 1);
              setTotalGames(totalGames + 1);
              console.log("Pass Bet Wins if Point is Rolled Before 7")
            }

            // Don't Pass Bet Loses if Point is Rolled Before 7
            if (newBetOptions[1].isBetPlaced) {
              setEarnings(earnings - newBetOptions[1].amount);
              setBetTotal(betTotal - newBetOptions[1].amount);
              newBetOptions[1].isBetPlaced = false;
              newBetOptions[1].chipsClass = "noBetPlaced";
              newBetOptions[1].amount = 0;
              setBetOptions(newBetOptions);
              setTotalGames(totalGames + 1);
              console.log("Don't Pass Bet Loses if Point is Rolled Before 7")
            }

            // Round Ends when a Point is rolled
            setPuckText([
              {
                text: "",
                className: "puckHidden"
              }, {
                text: "",
                className: "puckHidden"
              }, {
                text: "",
                className: "puckHidden"
              }, {
                text: "",
                className: "puckHidden"
              }, {
                text: "",
                className: "puckHidden"
              }, {
                text: "",
                className: "puckHidden"
              }]);
            setIsComeOut(true);
            setBetTotal(0);
          }
          break;

        case 5:
          // Field Bet Loses on 5
          if (newBetOptions[14].isBetPlaced) {
            setEarnings(earnings - newBetOptions[14].amount);
            setBetTotal(betTotal - newBetOptions[14].amount);
            newBetOptions[14].isBetPlaced = false;
            newBetOptions[14].chipsClass = "noBetPlaced";
            newBetOptions[14].amount = 0;
            setBetOptions(newBetOptions);
            setTotalGames(totalGames + 1);
            console.log("Field Bet Loses on 5")
          }

          if (point === 5) {
            // Pass Bet Wins if Point is Rolled Before 7
            if (newBetOptions[0].isBetPlaced) {
              setEarnings(earnings + newBetOptions[0].amount); // pays 1 to 1
              setBetTotal(betTotal - newBetOptions[0].amount);
              newBetOptions[0].isBetPlaced = false;
              newBetOptions[0].chipsClass = "noBetPlaced";
              newBetOptions[0].amount = 0;
              setBetOptions(newBetOptions);
              setWins(wins + 1);
              setTotalGames(totalGames + 1);
              console.log("Pass Bet Wins if Point is Rolled Before 7")
            }

            // Don't Pass Bet Loses if Point is Rolled Before 7
            if (newBetOptions[1].isBetPlaced) {
              setEarnings(earnings - newBetOptions[1].amount);
              setBetTotal(betTotal - newBetOptions[1].amount);
              newBetOptions[1].isBetPlaced = false;
              newBetOptions[1].chipsClass = "noBetPlaced";
              newBetOptions[1].amount = 0;
              setBetOptions(newBetOptions);
              setTotalGames(totalGames + 1);
              console.log("Don't Pass Bet Loses if Point is Rolled Before 7")
            }

            // Round Ends when a Point is rolled
            setPuckText([
              {
                text: "",
                className: "puckHidden"
              }, {
                text: "",
                className: "puckHidden"
              }, {
                text: "",
                className: "puckHidden"
              }, {
                text: "",
                className: "puckHidden"
              }, {
                text: "",
                className: "puckHidden"
              }, {
                text: "",
                className: "puckHidden"
              }]);
            setIsComeOut(true);
            setBetTotal(0);
          }
          break;

        case 6:
          // Big 6 Bet Wins on 6
          if (newBetOptions[7].isBetPlaced) {
            setEarnings(earnings + newBetOptions[7].amount); // pays 1 to 1
            setBetTotal(betTotal - newBetOptions[7].amount);
            newBetOptions[7].isBetPlaced = false;
            newBetOptions[7].chipsClass = "noBetPlaced";
            newBetOptions[7].amount = 0;
            setBetOptions(newBetOptions);
            setWins(wins + 1);
            setTotalGames(totalGames + 1);
            console.log("Big 6 Bet Wins on 6")
          }

          // Field Bet Loses on 6
          if (newBetOptions[14].isBetPlaced) {
            setEarnings(earnings - newBetOptions[14].amount);
            setBetTotal(betTotal - newBetOptions[14].amount);
            newBetOptions[14].isBetPlaced = false;
            newBetOptions[14].chipsClass = "noBetPlaced";
            newBetOptions[14].amount = 0;
            setBetOptions(newBetOptions);
            setTotalGames(totalGames + 1);
            console.log("Field Bet Loses on 6")
          }

          if (point === 6) {
            // Pass Bet Wins if Point is Rolled Before 7
            if (newBetOptions[0].isBetPlaced) {
              setEarnings(earnings + newBetOptions[0].amount); // pays 1 to 1
              setBetTotal(betTotal - newBetOptions[0].amount);
              newBetOptions[0].isBetPlaced = false;
              newBetOptions[0].chipsClass = "noBetPlaced";
              newBetOptions[0].amount = 0;
              setBetOptions(newBetOptions);
              setWins(wins + 1);
              setTotalGames(totalGames + 1);
              console.log("Pass Bet Wins if Point is Rolled Before 7")
            }

            // Don't Pass Bet Loses if Point is Rolled Before 7
            if (newBetOptions[1].isBetPlaced) {
              setEarnings(earnings - newBetOptions[1].amount);
              setBetTotal(betTotal - newBetOptions[1].amount);
              newBetOptions[1].isBetPlaced = false;
              newBetOptions[1].chipsClass = "noBetPlaced";
              newBetOptions[1].amount = 0;
              setBetOptions(newBetOptions);
              setTotalGames(totalGames + 1);
              console.log("Don't Pass Bet Loses if Point is Rolled Before 7")
            }

            // Round Ends when a Point is rolled
            setPuckText([
              {
                text: "",
                className: "puckHidden"
              }, {
                text: "",
                className: "puckHidden"
              }, {
                text: "",
                className: "puckHidden"
              }, {
                text: "",
                className: "puckHidden"
              }, {
                text: "",
                className: "puckHidden"
              }, {
                text: "",
                className: "puckHidden"
              }]);
            setIsComeOut(true);
            setBetTotal(0);
          }
          break;

        case 8:
          // Big 8 Bet Wins on 8
          if (newBetOptions[6].isBetPlaced) {
            setEarnings(earnings + newBetOptions[6].amount); // pays 1 to 1
            setBetTotal(betTotal - newBetOptions[6].amount);
            newBetOptions[6].isBetPlaced = false;
            newBetOptions[6].chipsClass = "noBetPlaced";
            newBetOptions[6].amount = 0;
            setBetOptions(newBetOptions);
            setWins(wins + 1);
            setTotalGames(totalGames + 1);
            console.log("Big 8 Bet Wins on 8")
          }

          // Field Bet Loses on 8
          if (newBetOptions[14].isBetPlaced) {
            setEarnings(earnings - newBetOptions[14].amount);
            setBetTotal(betTotal - newBetOptions[14].amount);
            newBetOptions[14].isBetPlaced = false;
            newBetOptions[14].chipsClass = "noBetPlaced";
            newBetOptions[14].amount = 0;
            setBetOptions(newBetOptions);
            setTotalGames(totalGames + 1);
            console.log("Field Bet Loses on 8")
          }

          if (point === 8) {
            // Pass Bet Wins if Point is Rolled Before 7
            if (newBetOptions[0].isBetPlaced) {
              setEarnings(earnings + newBetOptions[0].amount); // pays 1 to 1
              setBetTotal(betTotal - newBetOptions[0].amount);
              newBetOptions[0].isBetPlaced = false;
              newBetOptions[0].chipsClass = "noBetPlaced";
              newBetOptions[0].amount = 0;
              setBetOptions(newBetOptions);
              setWins(wins + 1);
              setTotalGames(totalGames + 1);
              console.log("Pass Bet Wins if Point is Rolled Before 7")
            }

            // Don't Pass Bet Loses if Point is Rolled Before 7
            if (newBetOptions[1].isBetPlaced) {
              setEarnings(earnings - newBetOptions[1].amount);
              setBetTotal(betTotal - newBetOptions[1].amount);
              newBetOptions[1].isBetPlaced = false;
              newBetOptions[1].chipsClass = "noBetPlaced";
              newBetOptions[1].amount = 0;
              setBetOptions(newBetOptions);
              setTotalGames(totalGames + 1);
              console.log("Don't Pass Bet Loses if Point is Rolled Before 7")
            }

            // Round Ends when a Point is rolled
            setPuckText([
              {
                text: "",
                className: "puckHidden"
              }, {
                text: "",
                className: "puckHidden"
              }, {
                text: "",
                className: "puckHidden"
              }, {
                text: "",
                className: "puckHidden"
              }, {
                text: "",
                className: "puckHidden"
              }, {
                text: "",
                className: "puckHidden"
              }]);
            setIsComeOut(true);
            setBetTotal(0);
          }
          break;

        case 9:
          // Field Bet Wins on 9
          if (newBetOptions[14].isBetPlaced) {
            setEarnings(earnings + newBetOptions[14].amount); // pays 1 to 1
            setBetTotal(betTotal - newBetOptions[14].amount);
            newBetOptions[14].isBetPlaced = false;
            newBetOptions[14].chipsClass = "noBetPlaced";
            newBetOptions[14].amount = 0;
            setBetOptions(newBetOptions);
            setWins(wins + 1);
            setTotalGames(totalGames + 1);
            console.log("Field Bet Wins on 9")
          }

          if (point === 9) {
            // Pass Bet Wins if Point is Rolled Before 7
            if (newBetOptions[0].isBetPlaced) {
              setEarnings(earnings + newBetOptions[0].amount); // pays 1 to 1
              setBetTotal(betTotal - newBetOptions[0].amount);
              newBetOptions[0].isBetPlaced = false;
              newBetOptions[0].chipsClass = "noBetPlaced";
              newBetOptions[0].amount = 0;
              setBetOptions(newBetOptions);
              setWins(wins + 1);
              setTotalGames(totalGames + 1);
              console.log("Pass Bet Wins if Point is Rolled Before 7")
            }

            // Don't Pass Bet Loses if Point is Rolled Before 7
            if (newBetOptions[1].isBetPlaced) {
              setEarnings(earnings - newBetOptions[1].amount);
              setBetTotal(betTotal - newBetOptions[1].amount);
              newBetOptions[1].isBetPlaced = false;
              newBetOptions[1].chipsClass = "noBetPlaced";
              newBetOptions[1].amount = 0;
              setBetOptions(newBetOptions);
              setTotalGames(totalGames + 1);
              console.log("Don't Pass Bet Loses if Point is Rolled Before 7")
            }

            // Round Ends when a Point is rolled
            setPuckText([
              {
                text: "",
                className: "puckHidden"
              }, {
                text: "",
                className: "puckHidden"
              }, {
                text: "",
                className: "puckHidden"
              }, {
                text: "",
                className: "puckHidden"
              }, {
                text: "",
                className: "puckHidden"
              }, {
                text: "",
                className: "puckHidden"
              }]);
            setIsComeOut(true);
            setBetTotal(0);
          }
          break;

        case 10:
          // Field Bet Wins on 10
          if (newBetOptions[14].isBetPlaced) {
            setEarnings(earnings + newBetOptions[14].amount); // pays 1 to 1
            setBetTotal(betTotal - newBetOptions[14].amount);
            newBetOptions[14].isBetPlaced = false;
            newBetOptions[14].chipsClass = "noBetPlaced";
            newBetOptions[14].amount = 0;
            setBetOptions(newBetOptions);
            setWins(wins + 1);
            setTotalGames(totalGames + 1);
            console.log("Field Bet Wins on 10")
          }

          if (point === 10) {
            // Pass Bet Wins if Point is Rolled Before 7
            if (newBetOptions[0].isBetPlaced) {
              setEarnings(earnings + newBetOptions[0].amount); // pays 1 to 1
              setBetTotal(betTotal - newBetOptions[0].amount);
              newBetOptions[0].isBetPlaced = false;
              newBetOptions[0].chipsClass = "noBetPlaced";
              newBetOptions[0].amount = 0;
              setBetOptions(newBetOptions);
              setWins(wins + 1);
              setTotalGames(totalGames + 1);
              console.log("Pass Bet Wins if Point is Rolled Before 7")
            }

            // Don't Pass Bet Loses if Point is Rolled Before 7
            if (newBetOptions[1].isBetPlaced) {
              setEarnings(earnings - newBetOptions[1].amount);
              setBetTotal(betTotal - newBetOptions[1].amount);
              newBetOptions[1].isBetPlaced = false;
              newBetOptions[1].chipsClass = "noBetPlaced";
              newBetOptions[1].amount = 0;
              setBetOptions(newBetOptions);
              setTotalGames(totalGames + 1);
              console.log("Don't Pass Bet Loses if Point is Rolled Before 7")
            }

            // Round Ends when a Point is rolled
            setPuckText([
              {
                text: "",
                className: "puckHidden"
              }, {
                text: "",
                className: "puckHidden"
              }, {
                text: "",
                className: "puckHidden"
              }, {
                text: "",
                className: "puckHidden"
              }, {
                text: "",
                className: "puckHidden"
              }, {
                text: "",
                className: "puckHidden"
              }]);
            setIsComeOut(true);
            setBetTotal(0);
          }
          break;
      }
    }
    console.log(`Dice total: ${diceTotal}, Come Out ${isComeOut}, Point: ${point}`)

  }, [diceTotal]);

  return (
    // craps container
    <Row id="crapsContainer">
      <Col lg={1}></Col>
      <Col lg={10}>

        {/* money, title, bets */}
        <Row id={"header"}>
          <Col lg={4}>
            <h5>Earnings: ${earnings}.00</h5>
          </Col>
          <Col lg={4}>
            <h3>CRAPS</h3>
          </Col>
          <Col lg={4}>
            <h5>Total Bet: ${betTotal}.00</h5>
          </Col>
        </Row>

        {/* table and dice */}
        <Row>

          {/* table */}
          <Table puckText={puckText} betOptions={betOptions} handleBetPlacement={handleBetPlacement} />

          {/* dice and side bets */}
          <Col lg={3}>
            <Dice d1={d1} d2={d2} diceTotal={diceTotal} handleDiceRoll={handleDiceRoll} />
            <Row>
              <Col lg={12} className={"diceContainer"}>
                <h1>Side Bets</h1>
              </Col>
            </Row>
          </Col>

        </Row>

      </Col>
      <Col lg={1}></Col>
    </Row>
  );
};

export default Craps;