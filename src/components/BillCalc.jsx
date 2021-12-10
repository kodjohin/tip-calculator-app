import React, { useContext } from "react";

import TipList from "../components/TipList";
import { SplitterContext } from "../context/AppState";
import { StyledBillCalc } from "../components-styles/StyledBillCalc";

const BillCalc = () => {
	const { bill, people, onBillChanged, onPeopleChanged } = useContext(SplitterContext);
	return (
		<StyledBillCalc>
			<label data-testid="bill_label" type="text">Bill</label>
			<input
				className="bill"
				type="number"
				value={bill}
				onChange={(e) => onBillChanged(e)}
			/>
			<label type="text">Select Tip %</label>
			<TipList />
			<label type="text">Number of People</label>
			<input
				className="people-number"
				type="number"
				value={people}
				onChange={(e) => onPeopleChanged(e)}
			/>
		</StyledBillCalc>
	);
};

export default BillCalc;
