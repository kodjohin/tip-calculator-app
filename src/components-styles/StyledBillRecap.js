import styled from "styled-components";

export const StyledBillRecap = styled.div`
	width: 305px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;
	border-radius: 10px;
	background-color: var(--very-dark-cyan);
	text-align: center;
	padding-top: 30px;
	padding-bottom: 10px;

	button {
		grid-column: span 2;
		padding: 10px 85px;
		border-radius: 5px;
		margin: 0 20px;
		color: var(--very-dark-cyan);
		background-color: var(--strong-cyan);
		font-weight: 700;
		font-family: "Space Mono", monospace;
		cursor: pointer;

		:hover {
			background-color: var(--light-grayish-cyan);
		}
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
			word-break: break-all;
		}
		p {
			font-size: 0.8rem;
			color: var(--strong-cyan);
		}
	}
`;
