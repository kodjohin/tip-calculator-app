import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Person from "./images/icon-person.svg";
import Dollar from "./images/icon-dollar.svg";

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
      font-family: 'Space Mono', monospace;
      padding-right: 10px;

      &.bill {
        background: url(${Dollar}) no-repeat scroll 7px 14px var(--very-light-grayish-cyan);
        margin-bottom: 20px;
      }

      &.people-number {
        background: url(${Person}) no-repeat scroll 7px 14px var(--very-light-grayish-cyan);
      }

      /* Chrome, Safari, Edge, Opera */
      ::-webkit-outer-spin-button,
      ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Firefox */
      [type=number] {
        -moz-appearance: textfield;
      }
  }
  section label {
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

  button {
    padding: 15px 40px;
    border-radius: 5px;
    font-size: 1.2rem;
    font-weight: 700;
    font-family: 'Space Mono', monospace;
    cursor: pointer;

    &[value="5%"],
    &[value="10%"],
    &[value="25%"],
    &[value="50%"]
    {
        background-color: var(--very-dark-cyan);
        color: var(--white);
    }
    &[value="15%"]
    {
        background-color: var(--strong-cyan);
        color: var(--very-dark-cyan);
    }
    &[value="Custom"]
    {
        background-color: var(--very-light-grayish-cyan);
        color: var(--very-dark-cyan);
    }
  }
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
    font-family: 'Space Mono', monospace;
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
        font-size: .8rem;
        color: var(--strong-cyan);
      }
  }
`;

function App() {
	return (
		<StyledApp className="container">
			<Header />
			<StyledMain>
				<section>
					<label type="text">Bill</label>
					<input className="bill"  type="number" name="" id=""/>
					<label type="text">Select Tip %</label>
					<StyledButtons>
						{["5%", "10%", "15%", "25%", "50%", "Custom"].map((tip, index) => (
							<button key={index} value={tip}>{tip}</button>
						))}
					</StyledButtons>
          <label type="text">Number of People</label>
					<input className="people-number"  type="number" name="" id="" />
				</section>
				<StyledSection>
          <label type="text">Tip Amount<p> / person</p></label>
          <label className="amount" type="text">$4.27</label>
          <label type="text">Total<p> / person</p></label>
          <label className="amount" type="text">$32.79</label>
          <button>RESET</button>
        </StyledSection>
			</StyledMain>
		</StyledApp>
	);
}

export default App;
