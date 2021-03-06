import React from 'react';

const ScoreBoard = props => {

  return (
    <div className="scoreboard-outer-container">
      <div className='round-moves-container'>
        <h3 className='round-display'>ROUND: {props.roundCount}</h3>
        <h3 className='round-display'>MOVES: {props.playerClickDisplay}/{props.roundCount}</h3>
      </div>
      <div className='score-board-button-container'>
        <button onClick={props.startGame} className='new-game-button'>{props.randomNumArray.length !== 0 ? 'NEW GAME' : 'START GAME'}</button>
        <button onClick={props.onViewRulesClick} className='new-game-button'>{props.rulesVisible ? 'HIDE RULES' : 'VIEW RULES'}</button>
      </div>
    </div>
  );

}

export default ScoreBoard;
