import React, { useState } from "react";
import "./App.css";

function BottomRow () {
const [quarterNum, setQuarterNum] = useState(0);

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">3</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarterNum}</div>
      </div>

      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => setQuarterNum(quarterNum + 1)} setclassName="homeButtons__touchdown">Quarter</button>
          <button onClick={() => setQuarterNum(0)} setclassName="homeButtons__touchdown"> Reset Quarter</button>
          {/* <button onClick={() => setHomeScore(homeScore + 3)} className="homeButtons__fieldGoal">Home Field Goal</button> */}
        </div>
        {/* <div className="awayButtons">
          <button onClick={() => setAwayScore(awayScore + 7)}className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => setAwayScore(awayScore + 3)}className="awayButtons__fieldGoal">Away Field Goal</button>
        </div> */}
      </section>
    </div>
  );
};


export default BottomRow;
