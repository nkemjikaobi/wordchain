import BoardContext from '@context/board/BoardContext';
import { useContext } from 'react';

/**
 * This is a hook to return all (functions / methods) and state variables in the board context provider
 * Prevents reimports and repititions of useContext and the auth context
 * @returns
 */
const useBoard = () => {
	const {
		//methods
		updateBoard,
		updateCurrentAttempt,
		onEnter,
		onDelete,
		onSelectLetter,
		updateWordSet,
		generateWords,
		updateDisabledLetters,
		updateGameOver,
		updateCorrectWord,

		//state variables
		board,
		currentAttempt,
		correctWord,
		wordSet,
		disabledLetters,
		gameOver,
	} = useContext(BoardContext);

	return {
		//methods
		updateBoard,
		updateCurrentAttempt,
		onDelete,
		onEnter,
		onSelectLetter,
		updateWordSet,
		generateWords,
		updateDisabledLetters,
		updateGameOver,
		updateCorrectWord,

		//state variables
		board,
		currentAttempt,
		correctWord,
		wordSet,
		disabledLetters,
		gameOver,
	};
};

export default useBoard;
