import useBoard from '@hooks/useBoard';
import React from 'react';

const GameOver = () => {
	const {
		currentAttempt,
		gameOver,
		correctWord,
	} = useBoard();
	return (
		<div className='gameOver'>
			<h3>
				{gameOver.guessedWord
					? 'You Correctly Guessed the Wordle'
					: 'You Failed to Guess the Word'}
			</h3>
			<h1>Correct Word: {correctWord}</h1>
			{gameOver.guessedWord && (
				<h3>You guessed in {currentAttempt.attempt} attempts</h3>
			)}
		</div>
	);
};

export default GameOver;
