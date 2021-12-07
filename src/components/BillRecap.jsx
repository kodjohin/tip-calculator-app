import React, {useContext} from "react";
import { SplitterContext } from "../context/AppState";
import {StyledBillRecap} from "../components-styles/StyledBillRecap"

const BillRecap = () => {
    const {tipAmount, total, reset} = useContext(SplitterContext)

	return (
		<StyledBillRecap>
			<label type="text">
				Tip Amount<p> / person</p>
			</label>
			<label className="amount" type="text">
				${tipAmount}
			</label>
			<label type="text">
				Total<p> / person</p>
			</label>
			<label className="amount" type="text">
				${total}
			</label>
			<button onClick={() => reset()}>RESET</button>
		</StyledBillRecap>
	);
};

export default BillRecap;
