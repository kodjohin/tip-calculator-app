import { createContext, useState, useEffect } from "react";

const initialeState = {
	bill: "",
	tip: 10,
	customTip: "",
	people: "",
	tipAmount: Number(0).toFixed(2),
	total: Number(0).toFixed(2),
};

//****** Create context */
export const SplitterContext = createContext(initialeState);

//****** Provider component */
export const AppProvider = ({ children }) => {
	const [state, setState] = useState(initialeState);

	const onBillChanged = (e) => {
		console.log(e.target.value);
		const value = e.target.value;
		if (parseInt(value) === 0) return;
		setState({ ...state, bill: value });
	};

	const onTipChanged = (e) => {
		console.log(e.target.value);
		const value = e.target.value;
		setState({ ...state, tip: value });
	};
	const onCustomTipChanged = (e) => {
		console.log(e.target.value);
		const value = e.target.value;
		setState({ ...state, customTip: value });
	};

	const onPeopleChanged = (e) => {
		console.log(e.target.value);
		const value = e.target.value;
		if (parseInt(value) === 0) return;
		setState({ ...state, people: value });
	};

	const reset = () => {
		console.log("%c Call Reset", "font-size: 20px; color: red;");
		setState({
			bill: "",
			tip: 10,
			customTip: "",
			people: "",
			tipAmount: Number(0).toFixed(2),
			total: Number(0).toFixed(2),
		});
	};

	useEffect(() => {
		if (!(state.bill && state.tip && state.people)) return;
		setState({
			...state,
			tipAmount: (
				(state.bill * (parseInt(state.tip) / 100)) /
				state.people
			).toFixed(2),
			total: (
				(state.bill * (1 + parseInt(state.tip) / 100)) /
				state.people
			).toFixed(2),
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.bill, state.tip, state.people]);

	return (
		<SplitterContext.Provider
			value={{
				bill: state.bill,
				tip: state.tip,
				customTip: state.customTip,
				people: state.people,
				tipAmount: state.tipAmount,
				total: state.total,
				reset,
				onBillChanged,
				onTipChanged,
				onCustomTipChanged,
				onPeopleChanged,
			}}
		>
			{children}
		</SplitterContext.Provider>
	);
};
