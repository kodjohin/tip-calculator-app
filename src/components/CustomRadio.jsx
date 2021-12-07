import React from "react";
import {StyledRadio} from "../components-styles/StyledRadio";

const CustomRadio = (props) => {
	return (
		<StyledRadio onChange={(e) => props.onChange(e)}>
			{props.label === "custom" ? (
				<>
					<input
						type="radio"
						id={props.id}
						value={props.label}
						name={props.name}
					/>
					<label className="custom" htmlFor={props.id}></label>
					<input
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
					/>
					<label htmlFor={props.id}>{props.label}</label>
				</>
			)}
		</StyledRadio>
	);
};

export default CustomRadio;
