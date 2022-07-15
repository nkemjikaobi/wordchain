import { UPDATE_BOARD } from '../types';

const AuthReducer = (state: any, action: any) => {
	switch (action.type) {
		case UPDATE_BOARD:
			return {
				...state,
				board: [...state.board, action.payload],
			};
		default:
			return state;
	}
};
export default AuthReducer;
