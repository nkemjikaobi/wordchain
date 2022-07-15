import React, { useReducer } from 'react';
import BoardContext from './BoardContext';
import BoardReducer from './BoardReducer';
import { UPDATE_BOARD } from '../types';
import { boardDefault } from 'Words';

const BoardState = (props: any) => {
	const initialState = {
		board: boardDefault,
	};

	const [state, dispatch] = useReducer(BoardReducer, initialState);

	const updateBoard = () => {
		dispatch({
			type: UPDATE_BOARD,
		});
	};

	return (
		<BoardContext.Provider
			value={{
				board: state.board,
				updateBoard,
			}}
		>
			{props.children}
		</BoardContext.Provider>
	);
};

export default BoardState;
