
import "./App.css";
import { AppProvider } from "./context/AppState";
import Header from "./components/Header";
import BillRecap from "./components/BillRecap";
import BillCalc from "./components/BillCalc";
import {StyledApp} from "./components-styles/StyledApp"
import {StyledMain} from "./components-styles/StyledMain"

const App = () => {
	return (
		<AppProvider>
			<StyledApp>
				<Header />
				<StyledMain>
					<BillCalc />
					<BillRecap />
				</StyledMain>
			</StyledApp>
		</AppProvider>
	);
};

export default App;
