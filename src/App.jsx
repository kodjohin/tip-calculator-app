import "./App.css";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Person from "./images/icon-person.svg";
import Dollar from "./images/icon-dollar.svg";
import CustomRadio from "./components/CustomRadio";

const StyledApp = styled.div`
	min-width: 375px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const StyledMain = styled.main`
	min-width: 375px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	row-gap: 20px;
	background-color: var(--white);
	padding-top: 20px;
	padding-bottom: 30px;
	margin-top: 30px;
	border-radius: 20px;

	input {
		font-size: 1.5rem;
		border-radius: 3px;
		padding: 5px 0;
		text-align: right;
		color: var(--very-dark-cyan);
		font-weight: 700;
		font-family: "Space Mono", monospace;
		padding-right: 10px;
		outline: var(--strong-cyan);

		:focus {
			border: 1px solid var(--strong-cyan);
		}

		&.bill {
			background: url(${Dollar}) no-repeat scroll 7px 14px
				var(--very-light-grayish-cyan);
			margin-bottom: 20px;
		}

		&.people-number {
			background: url(${Person}) no-repeat scroll 7px 14px
				var(--very-light-grayish-cyan);
		}

		/* Chrome, Safari, Edge, Opera */
		::-webkit-outer-spin-button,
		::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}

		/* Firefox */
		[type="number"] {
			-moz-appearance: textfield;
		}
	}
	section > label {
		margin: 10px 0;
	}

	section {
		display: flex;
		flex-direction: column;
	}
`;

const StyledButtons = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 15px;
	margin-bottom: 20px;
`;

const StyledSection = styled.div`
	width: 90%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px 0px;
	border-radius: 10px;
	background-color: var(--very-dark-cyan);
	text-align: center;
	padding-top: 30px;
	padding-bottom: 10px;

	button {
		grid-column: span 2;
		padding: 10px 85px;
		border-radius: 5px;
		margin: 10px 20px;
		color: var(--very-dark-cyan);
		background-color: var(--strong-cyan);
		font-weight: 700;
		font-family: "Space Mono", monospace;
		cursor: pointer;
	}

	label {
		color: #fff;
		text-align: left;
		margin-left: 20px;
		&.amount {
			color: var(--strong-cyan);
			font-size: 1.5rem;
			text-align: right;
			margin-right: 20px;
		}
		p {
			font-size: 0.8rem;
			color: var(--strong-cyan);
		}
	}
`;

const App = () => {
	const [bill, setBill] = useState("");
	const [people, setPeople] = useState("");
	const [tip, setTip] = useState("5%");
	const [customTip, setCustomTip] = useState("");
	const [tipAmount, setTipAmout] = useState(0);
	const [total, setTotal] = useState(0);

	const onBillChanged = (e) => {
		console.log(e.target.value);
		const value = e.target.value;
		if (parseInt(value) === 0) return;
		setBill(value);
	};

	const onTipChanged = (e) => {
		console.log(e.target.value);
		const value = e.target.value;
		setTip(value);
	};
	const onCustomTipChanged = (e) => {
		console.log(e.target.value);
		const value = e.target.value;
		setCustomTip(value);
	};

	const onPeopleChanged = (e) => {
		console.log(e.target.value);
		const value = e.target.value;
		if (parseInt(value) === 0) return;
		setPeople(value);
	};

	useEffect(() => {
		if (!(bill && tip && people)) return;
		setTipAmout(((bill * (parseInt(tip)/100))/people).toFixed(2));
		setTotal(((bill * (1 + parseInt(tip)/100))/people).toFixed(2));
	}, [bill, tip, people]);

	const reset = () => {
		console.log("%c Call Reset", "font-size: 20px; color: red;");
		setTip("5%");
		setBill("");
		setPeople("");
		setTipAmout(0);
		setTotal(0);
	};

	return (
		<StyledApp className="container">
			<Header />
			<StyledMain>
				<section>
					<label type="text">Bill</label>
					<input
						className="bill"
						type="number"
						value={bill}
						onChange={(e) => onBillChanged(e)}
					/>
					<label type="text">Select Tip %</label>
					<StyledButtons>
						{["5%", "10%", "15%", "25%", "50%", "custom"].map((tip, index) => (
							<CustomRadio
								id={`tip${index}`}
								name="tip"
								label={tip}
								key={index}
								custom={customTip}
								onChange={(e) => onTipChanged(e)}
								onCustom={(e) => onCustomTipChanged(e)}
							/>
						))}
					</StyledButtons>
					<label type="text">Number of People</label>
					<input
						className="people-number"
						type="number"
						value={people}
						onChange={(e) => onPeopleChanged(e)}
					/>
				</section>
				<StyledSection>
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
				</StyledSection>
			</StyledMain>
		</StyledApp>
	);
};

export default App;
