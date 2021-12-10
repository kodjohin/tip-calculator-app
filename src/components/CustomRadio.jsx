import React from "react";
import {StyledRadio} from "../components-styles/StyledRadio";

const CustomRadio = (props) => {
	return (
		<StyledRadio >
			{props.label === "custom" ? (
				<>
					<input
						data-testid="custom"
						className="custom"
						type="number"
						value={props.custom}
						placeholder="Custom"
						onChange={(e) => props.onCustom(e)}
					/>
				</>
			) : (
				<>
					<input
						type="radio"
						id={props.id}
						value={props.label}
						name={props.name}
						defaultChecked={props.checked}
						data-testid={props.label}
						onChange={(e) => props.onChange(e)}
					/>
					<label htmlFor={props.id}>{props.label}</label>
				</>
			)}
		</StyledRadio>
	);
};

export default CustomRadio;
