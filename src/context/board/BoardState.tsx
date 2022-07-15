import React, { useReducer } from 'react';
import BoardContext from './BoardContext';
import BoardReducer from './BoardReducer';
import { UPDATE_BOARD, UPDATE_CURRENT_ATTEMPT } from '../types';
import { boardDefault } from 'Words';

const BoardState = (props: any) => {
	const initialState = {
		board: boardDefault,
		currentAttempt: {
			attempt: 0,
			letterPosition: 0,
		},
	};

	const [state, dispatch] = useReducer(BoardReducer, initialState);

	const updateBoard = (newBoard: any) => {
		dispatch({
			type: UPDATE_BOARD,
			payload: newBoard,
		});
	};

	const updateCurrentAttempt = (newAttempt: any) => {
		dispatch({
			type: UPDATE_CURRENT_ATTEMPT,
			payload: newAttempt,
		});
	};

	const onEnter = () => {
		if (state.currentAttempt.letterPosition !== 5) return;
		updateCurrentAttempt({
			attempt: state.currentAttempt.attempt + 1,
			letterPosition: 0,
		});
	};

	const onDelete = () => {
		if (state.currentAttempt.letterPosition === 0) return;
		const newBoard = [...state.board];
		newBoard[state.currentAttempt.attempt][
			state.currentAttempt.letterPosition - 1
		] = '';
		updateBoard(newBoard);
		updateCurrentAttempt({
			...state.currentAttempt,
			letterPosition: state.currentAttempt.letterPosition - 1,
		});
	};

	const onSelectLetter = (keyVal: any) => {
		if (state.currentAttempt.letterPosition > 4) return;

		const newBoard = [...state.board];
		newBoard[state.currentAttempt.attempt][
			state.currentAttempt.letterPosition
		] = keyVal;
		updateBoard(newBoard);
		updateCurrentAttempt({
			...state.currentAttempt,
			letterPosition: state.currentAttempt.letterPosition + 1,
		});
	};

	return (
		<BoardContext.Provider
			value={{
				board: state.board,
				currentAttempt: state.currentAttempt,
				updateBoard,
				updateCurrentAttempt,
				onEnter,
				onDelete,
				onSelectLetter,
			}}
		>
			{props.children}
		</BoardContext.Provider>
	);
};

export default BoardState;
