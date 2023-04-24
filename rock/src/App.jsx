import React, { useState } from "react";

function App() {
  const [Userscore, UsersetScore] = useState(0);
  const [AIscore, AIsetScore] = useState(0);
  const [Results, SetResults] = useState("");
  const [Turns, SetTurns] = useState(0);

  function handleClick(value) {
    let items = ["Sicssors", "Paper", "Rock"];
    SetTurns(Turns + 1);
    const opponentIndex = Math.floor(Math.random() * 3);
    if (items.indexOf(value) == 0 && opponentIndex == 2) {
      AIsetScore(AIscore + 1);
      SetResults("You loose");
    } else if (items.indexOf(value) == 2 && opponentIndex == 0) {
      UsersetScore(Userscore + 1);
      SetResults("You win");
    } else if (items.indexOf(value) < opponentIndex) {
      UsersetScore(Userscore + 1);
      SetResults("You win");
    } else if (items.indexOf(value) > opponentIndex) {
      AIsetScore(AIscore + 1);
      SetResults("You loose");
    } else {
      SetResults("Draw");
    }
  }

  function handleRestart() {
    SetResults("");
    AIsetScore(0);
    UsersetScore(0);
    SetTurns(0);
  }
  let FinalResults = "";
  if (Turns == 3) {
    if (AIscore > Userscore) {
      FinalResults = "LOST";
    } else {
      FinalResults = "WON";
    }
  }

  return (
    <div className="container">
      {Turns < 3 ? (
        <>
          <h1>Turns {Turns}</h1>
          <h2>Pick a gesture:</h2>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleClick("Sicssors")}
          >
            {" "}
            Sicssors
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleClick("Paper")}
          >
            {" "}
            Paper
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleClick("Rock")}
          >
            {" "}
            Rock
          </button>
          <h2>Player Score= {Userscore}</h2>
          <h2>AI Score= {AIscore}</h2>
          <p>{Results}</p>
        </>
      ) : (
        <>
          <p>{FinalResults}</p>
          <button onClick={() => handleRestart()}> Restart The Game</button>
        </>
      )}
    </div>
  );
}

export default App;
