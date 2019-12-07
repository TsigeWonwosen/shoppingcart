export const ShoppingReducer = (state, action) => {
	switch (action.type) {
		case 'ADD':
			return [
				...state,
				{
					id   : state.length,
					name : action.name
				}
			];
		case '_':
			return state.filter((_, index) => index !== action.index);
		case 'CLEAR':
			return [];

		default:
			return state;
	}
};
