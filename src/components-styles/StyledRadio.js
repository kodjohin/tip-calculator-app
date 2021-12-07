import styled from "styled-components";

export const StyledRadio = styled.div`
	input {
		display: none;
	}
	input {
		text-align: center;
		background-color: var(--very-light-grayish-cyan);
		color: var(--very-dark-grayish-cyan);

		::placeholder {
			color: var(--very-dark-grayish-cyan);
		}
	}

	input.custom {
		width: 155px;
		display: block;
		text-align: center;
	}
	label.custom {
		display: none;
	}

	input.custom {
		:focus {
			text-align: right;
		}
	}

	label {
		display: block;
		font-family: "Space Mono", monospace;
		cursor: pointer;
		text-align: center;
		border-radius: 5px;
		font-size: 1.2rem;
		font-weight: 700;
		background-color: var(--very-dark-cyan);
		color: var(--white);
		padding: 10px 10px;

		:hover {
			background-color: var(--light-grayish-cyan);
			color: var(--very-dark-cyan);
		}
	}

	label:before {
		transition: box-shadow 0.4s ease, background 0.3s ease;
	}

	input:checked + label {
		background-color: var(--strong-cyan);
		color: var(--very-dark-cyan);
	}
`;