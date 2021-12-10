import styled from "styled-components";
import Person from "../images/icon-person.svg";
import Dollar from "../images/icon-dollar.svg";

export const StyledBillCalc = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 300px;
	gap: 10px;
	
	> input {
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
			margin-bottom: 10px;
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
`;
