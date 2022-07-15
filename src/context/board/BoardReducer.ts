import { UPDATE_BOARD, UPDATE_CURRENT_ATTEMPT } from '../types';

const AuthReducer = (state: any, action: any) => {
	switch (action.type) {
		case UPDATE_BOARD:
			return {
				...state,
				board: action.payload,
			};
		case UPDATE_CURRENT_ATTEMPT:
			return {
				...state,
				currentAttempt: action.payload,
			};
		default:
			return state;
	}
};
export default AuthReducer;
