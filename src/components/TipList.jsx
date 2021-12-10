import React, {useContext} from "react";
import styled from "styled-components";
import CustomRadio from "../components/CustomRadio";
import { SplitterContext } from "../context/AppState";

const StyledButtons = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 10px;
	margin-bottom: 10px;
`;
const TipList = () => {
    const {tip, customTip, onTipChanged, onCustomTipChanged} = useContext(SplitterContext)
	
	return (
		<StyledButtons>
			{["5%", "10%", "15%", "25%", "50%", "custom"].map((t, index) => (
				<CustomRadio
					id={`tip${index}`}
					name="tip"
					label={t}
					key={index}
					custom={customTip}
					onChange={(e) => onTipChanged(e)}
					onCustom={(e) => onCustomTipChanged(e)}
					checked={tip === parseInt(t)}
				/>
			))}
		</StyledButtons>
	);
};

export default TipList;
