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

		//state variables
		board,
	} = useContext(BoardContext);

	return {
		//methods
		updateBoard,

		//state variables
		board,
	};
};

export default useBoard;
