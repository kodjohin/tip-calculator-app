const AppReducer = (state, action) => {
	switch (action.type) {
		case "RESET":
			return {
				state: action.payload,
			};
		case "BILL_CHANGED":
			return {
				...state,
				bill: action.payload,
			};
		case "TIP_CHANGED":
			return {
				...state,
				tip: action.payload,
			};
		case "CUSTOM_TIP_CHANGED":
			return {
				...state,
				tip: action.payload,
			};
		case "PEOPLE_CHANGED":
			return {
				...state,
				people: action.payload,
			};
		case "TOTAL_CHANGED":
			console.log(
				"TOTAL_CHANGED",
				action.payload.tipAmount,
				action.payload.total
			);
			return {
				...state,
				tipAmount: action.payload.tipAmount,
				total: action.payload.total,
			};
		default:
			return state;
	}
};

export default AppReducer;
