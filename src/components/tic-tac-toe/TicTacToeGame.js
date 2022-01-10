import React, { useState } from "react";
import { winConditions } from "./winConditions";
import Board from './Board';

const TicTacToeGame = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xNext, setXNext] = useState(true);
    const winner = winConditions(history[stepNumber]);
    const xO = xNext ? 'X' : 'O';

    const handleClick = (index) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const fields = [...current];

        if(winner || fields[index]) return;

        fields[index] = xO;
        setHistory([...historyPoint, fields])
        setStepNumber(historyPoint.length);
        setXNext(!xNext);

    }         

    const playAgain = () => {
        setHistory([Array(9).fill(null)]);
        setStepNumber(0);
        setXNext(true);
    }

    return (
        <div className="tictactoe-outter">
            <h2>Tic Tac Toe</h2>
            <Board fields={history[stepNumber]} onClick={handleClick}/>
            <div>
                <h3 className='info-text'>
                    {winner ? 'Winner: ' + winner : 'Next player: ' + xO}
                </h3>
                <button onClick={playAgain}>
                    Play again
                </button>
            </div>
        </div>
    )

}

export default TicTacToeGame;